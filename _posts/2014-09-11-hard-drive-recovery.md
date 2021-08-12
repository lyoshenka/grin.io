---
---

My first foray into data recovery ended up being a big success. My GF's sister-in-law dropped her laptop and her hard drive started failing. She couldn't get the laptop to boot, and when she took it to the Apple Store, they told her they can't do anything for her. I knew I could do better.

## First, Save the Data

When you're trying to recover a drive with hardware issues, or if you're not sure what the exact issue is, the first thing you have to do is get as much data off the drive as you can. You never know if the drive is destroying more data as you use it, or when it will start to fail worse or die completely. Fortunately there's a great program called [ddrescue](http://www.forensicswiki.org/wiki/Ddrescue) that will image the drive for you in the safest way it can. It keeps a log of all the sectors it reads, so it won't reread unneccesary data if you stop and restart it. For an in-depth but still simple explanation of how it works, check out [the manual](https://www.gnu.org/software/ddrescue/manual/ddrescue_manual.html) ([a](/archive/www.gnu.org~software~ddrescue~manual~ddrescue_manual.html)). If you wanna get straight to it, then find a harddrive with enough room, install ddrescue, and do the following:

	cd /path/to/large/hard/drive/recovery/dir

	# first pass - copy as much good data as possible without worrying about errors
	sudo ddrescue --no-split --verbose /dev/failed-drive drive-image.bin ddrescue.log

    # second pass - go back over errors and get as much as you can
    sudo ddrescue --direct --max-retries=3 -verbose /dev/failed-drive drive-image.bin ddrescue.log

    # optional third pass - if you don't have all the data by now, you can try re-trimming
    sudo ddrescue --retrim --direct --max-retries=3 -verbose /dev/failed-drive drive-image.bin ddrescue.log

## Check the Filesystem

Hopefully at this point, you have a complete image of your failing drive. If you get a full copy, recovery is as simple as mounting a partition from the image and copying the files. Use `fdisk` to read the partition table (`gdisk` for GPT tables) and `mount` to to mount the appropriate partition.

	# read partition table
    fdisk -l drive-image.bin

Note the start and end sectors of the partition you want to mount, and the partition size. You'll have to do a little math to convert from sectors to bytes. To get the start, multiply the start sector by the sector size (usually 512 bytes). To get the end, subtract the start sector from the end sector and multiply that by the sector size. Here's an example:

	$ gdisk -l drive-image.bin
    GPT fdisk (gdisk) version 0.8.1

    Partition table scan:
      MBR: protective
      BSD: not present
      APM: not present
      GPT: present

    Found valid GPT with protective MBR; using GPT.
    Disk drive-image.bin: 488397168 sectors, 232.9 GiB
    Logical sector size: 512 bytes            <- **THIS IS THE SECTOR SIZE**
    Disk identifier (GUID): A6E3B260-D163-4C88-8560-D2870577ED94
    Partition table holds up to 128 entries
    First usable sector is 34, last usable sector is 488397134
    Partitions will be aligned on 8-sector boundaries
    Total free space is 262157 sectors (128.0 MiB)

    Number  Start (sector)    End (sector)  Size       Code  Name
       1              40          409639   200.0 MiB   EF00  EFI System Partition
       2          409640       488134983   232.6 GiB   AF00  Customer

    $ bc
    bc 1.06.95
    Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006 Free Software Foundation, Inc.
    This is free software with ABSOLUTELY NO WARRANTY.
    For details type `warranty'.
    409640*512
    209735680               <- **THIS IS THE FIRST BYTE OF THE SECOND PARTITION**
    (488134983-409640)*512
    249715375616            <- **THIS IS THE SIZE OF THE SECOND PARTITION IN BYTES**
    quit

Now that you have the information you need, mount the partition using Linux's loopback device. The `offset` option is the first byte of the partition you're mounting. The `sizelimit` is the size of the partition.

	sudo mkdir /media/loop
    sudo mount -o loop,offset=209735680,sizelimit=249715375616 drive-image.bin /media/loop

If the filesystem is broken, you can try using `fsck` to repair it. For more extreme repairs, check out [TestDisk](http://www.cgsecurity.org/wiki/TestDisk) and the `mmls` utility from [Sleuthkit](http://sleuthkit.org/sleuthkit/). Another option is to try to mount with a backup superblock. TestDisk can help you find the backup superblock(s) and see if it matches the main superblock.

## Mounting Failed, Now What?

If you can't get the image to mount, fear not. You can still try to recover the files from the raw image. There are a handful of tools that can help you do that (e.g. foremost, scalpel, magic rescue, photorec, sleuthkit/autopsy). I used Photorec because it came with TestDisk, and it worked like a charm.

	photorec -d /path/to/put/recovered/files drive-image.bin

PhotoRec has several options, and lets you choose what types of files to recover. I just ran it for all the files to see what it will pull up. In my case, `ddrescue` copied all but 5MB of a 180GB partition, so even though I couldn't mount the image, I got a ton of files from the drive. Many of them were system files that I didn't care about, but I also got all my important docs and my music collection. Hooray!

## Other Resources

- [Data Recovery - Ubuntu Wiki](https://help.ubuntu.com/community/DataRecovery)
- [Surviving a Linux Filesystem Failure](http://www.cyberciti.biz/tips/surviving-a-linux-filesystem-failures.html)
- Tools I used the most: ddrescue, sleuthkit (fls,mmls), testdisk, photorec, gdisk
