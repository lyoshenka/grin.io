---
title: "Email, MIME, and Content-Types"
---

I spent the last two days fixing the [Topscore](http://usetopscore.com) mailing lists so they forward attachments and inline images correctly. I had attempted this task twice in the past, failing completely the first time and coming close the second time but abandoning the effort because of time constraints. For some reason, this time things clicked for me and I finally understood how email is actually structured. Here are some of the things I learned. Hopefully they will be useful to you (or my future self)

## Thinking About Email

Email does not consist of just text, or even plain and HTML text. Email is a way to send any information, and a description of that information, while formatting it all as plain text. The basic format is kind of like a box you get from Amazon: there's the shipping label (the email envelope, not part of MIME), the packing slip describing what's in the box (the email headers) and the actual stuff you ordered (the email body). The MIME format that email uses is recursive (fractal, even), so an email can contain several other fully-formed emails inside it (like putting a bunch of boxes inside a larger box). Each box (including the first outer box) is called a `MIME Part` or `body part`.

Every MIME part has two sections: headers and body. The headers come first. They are rigidly formatted and consist of simple stuff like who sent the email, where they sent it to, and the subject, but also authentication information, spam filter results, whether the email is an auto-generated "I'm on vacation" message, etc. A MIME part doesn't have to have any headers, but almost all have at least the `Content-Type` header, which is one of the keys to correctly decoding an email for reading. After the headers comes the body, which can be formatted any number of ways depending on the content-type. 

## Common Content-Types

### text/plain, text/html

Nothing complicated here. The body contains plain text or HTML-formatted text. Just show it.

### multipart/mixed

The default content type if one is not present. Also the type that clients should fall back to if they don't understand or know how to deal with the one provided. It simply means that **the body contains one or more independent subparts that should be displayed in order**. For example, some text followed by an image followed by more text.

### multipart/alternative

This is kind of the opposite of mixed. It means **the body contains several representations of the same information, and only one of them should be shown at a time**. So if your email contains a plain-text version and an HTML version of the same message, those versions should be wrapped in a `multipart/alternative` part. The parts should also be arranged in order of increasing complexity (e.g. text then HTML). The client should present the most complex format it understands, or as the user to choose which format they want. 

### multipart/related

This one is kind of tricky. To quote the RFC, "the Multipart/Related media type is **intended for compound objects consisting of several inter-related body parts**.  For a Multipart/Related object, proper display cannot be achieved by individually displaying the constituent body parts." An example of this would be text with inline images. The first body part (or whichever part is designated the "root") would contain the text with links to images in the subsequent body parts (using the Content-ID header).

## References

- [RFC822](https://tools.ietf.org/html/rfc822), [RFC2822](https://tools.ietf.org/html/rfc2822): Email structure, the "memo" format (headers/body)
- [RFC1521](https://tools.ietf.org/html/rfc1521): The MIME format
- [RFC2112](https://tools.ietf.org/html/rfc2112): multipart/related content type
- <https://en.wikipedia.org/wiki/MIME>
- <https://msdn.microsoft.com/en-us/library/ms527355(v=exchg.10).aspx>