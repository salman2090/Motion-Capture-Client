const cameras = [
    {
        id:1,
        name:'Canon EOS 5D Mark IV DSLR',
        img1:'https://i.ibb.co/Nr64MrP/canon-5d-mark4.jpg',
        img2:'https://i.ibb.co/3RBdgmT/canon-5d-mark4-back.jpg',
        price:231361,
        description:'Canon EOS 5D Mark IV DSLR is an outstanding still photography option and an able 4K-capable video machine. This multimedia maven offers a newly developed 30.4MP full-frame CMOS sensor paired with the DIGIC 6+ image processor in order to balance fine.'
    },
    {
        id:2,
        name:'Canon EOS 5DS R DSLR Camera',
        img1:'https://i.ibb.co/zQM7PPP/canon-eos-5ds.jpg',
        img2:'https://i.ibb.co/FwJsDBn/canon-eos-5ds-back.jpg',
        price:128495,
        description:"Providing the full resolving power of its new sensor, the EOS 5DS R DSLR Camera from Canon is a variant of the 5DS with the sensor's low-pass filter rendered neutral. By canceling the effect of the filter, the 50.6MP sensor is enabled to deliver an even higher resolution with more intricate details."
    },
    {
        id:3,
        name:'Canon EOS 6D Mark II DSLR Camera',
        img1:'https://i.ibb.co/7NH1L2b/canon-eos-6d.jpg',
        img2:'https://i.ibb.co/K7qgqkg/canon-eos-6d-back.jpg',
        price:119923,
        description:"The EOS 6D Mark II DSLR Camera from Canon. Making high-performance full-frame imaging more accessible, the 6D Mark II makes numerous advancements over its predecessor to improve upon every aspect of image capture and creation."
    },
    {
        id:4,
        name:'Canon EOS 90D DSLR Camera',
        img1:'https://i.ibb.co/2nT8j2t/canon-eos-90d.jpg',
        img2:'https://i.ibb.co/1rCm7qW/canon-eos-90d-back.jpg',
        price:102779,
        description:'the Canon EOS 90D is a sleek DSLR also characterized by its high-resolution 32.5MP APS-C CMOS sensor. This updated sensor design achieves enhanced image clarity, resolution, and dynamic range, along with adept sensitivity to ISO 25600 and low noise to suit working in a variety of situations.'
    },
    {
        id:5,
        name:'Canon EOS R5 Mirrorless Camera',
        img1:'https://i.ibb.co/ZWdQLxG/canon-eos-r5.jpg',
        img2:'https://i.ibb.co/DfkbFV2/canon-eos-r5-back.jpg',
        price:334226,
        description:'For the professional image-maker who needs resolution, speed, and video capabilities, there is the Canon EOS R5. Setting a new standard for versatility, this full-frame mirrorless camera features a newly developed 45MP CMOS sensor, which offers 8K raw video recording, 12 fps continuous shooting with a mechanical shutter,'
    },
    {
        id:6,
        name:'Canon EOS R6 Mirrorless Camera',
        img1:'https://i.ibb.co/nrFbdRF/canon-eos-r6.jpg',
        img2:'https://i.ibb.co/mhG1qdy/canon-eos-r6-back.jpg',
        price:214217,
        description:'For the everyday shooter with high demands, the Canon EOS R6 is a versatile tool to meet the photo and video requirements of a contemporary imaging workflow. This full-frame mirrorless camera revolves around a refined 20MP CMOS sensor and DIGIC X processor, which afford quick shooting up to 12 fps, apt 4K60 video recording.'
    },
    {
        id:7,
        name:'Canon EOS Rebel T7 DSLR Camera',
        img1:'https://i.ibb.co/nLkV4vq/canon-eos-rebel.jpg',
        img2:'https://i.ibb.co/x8s17GD/canon-eos-rebel-back.jpg',
        price:38488,
        description:'Compact and capable, the Canon EOS Rebel T7 is a sleek entry-level DSLR featuring versatile imaging capabilities and a helpful feature set. Incorporating a 24.1MP APS-C CMOS sensor and DIGIC 4+ image processor, the T7 produces high-resolution stills with notable clarity, reduced noise.'
    },
    {
        id:8,
        name:'Kodak PIXPRO AZ421 Digital Camera',
        img1:'https://i.ibb.co/0nGXBdn/kodak-pixpro-az421.jpg',
        img2:'https://i.ibb.co/3SfgwGB/kodak-pixpro-az421-back.jpg',
        price:14058,
        description:'KODAK PIXPRO AZ421 Digital Camera is a versatile point-and-shoot camera that offers both still and video capabilities. It utilizes a 1/2.3" CCD sensor with a sensitivity range of ISO 80-3200 to produce 16.15MP pictures, as well as HD 720p video at up to 30 fps. '
    },
    {
        id:9,
        name:'Nikon D850 DSLR Camera',
        img1:'https://i.ibb.co/9hNYxXM/nikon-d850.jpg',
        img2:'https://i.ibb.co/g6D3W1B/nikon-d850-back.jpg',
        price:256820,
        description:'Proving that speed and resolution can indeed coexist, the Nikon D850 is a multimedia DSLR that brings together robust stills capabilities along with apt movie and time-lapse recording. Revolving around a newly designed 45.7MP BSI CMOS sensor and proven EXPEED 5 image processor, the D850 is clearly distinguished by its high resolution.'
    },
    {
        id:10,
        name:'Nikon Z 5 Mirrorless Camera',
        img1:'https://i.ibb.co/TbqcS1w/nikon-z5.jpg',
        img2:'https://i.ibb.co/yFrF4xd/nikon-z5-back.jpg',
        price:111094,
        description:'Compact and capable, the Nikon Z 5 is an FX-format mirrorless camera with a well-rounded feature set to suit both photo and video needs. Its 24.3MP CMOS sensor and EXPEED 6 processor afford wide sensitivity to ISO 51200, quick shooting at 4.5 fps, and UHD 4K video at 30 fps.'
    },
    {
        id:11,
        name:'Nikon Z 9 Mirrorless Camera',
        img1:'https://i.ibb.co/sgbtGdH/nikon-z9.jpg',
        img2:'https://i.ibb.co/nCxpfgN/nikon-z9-back.jpg',
        price:471123,
        description:'Delivering speed, image quality, and connectivity, the Nikon Z 9 is a professional-grade camera characterized by its newly developed sensor, advanced AF performance, and high-resolution 8K video recording. Their first mirrorless flagship camera, the Z 9 appeals to photographers and filmmakers working across a wide variety of applications.'
    },
    {
        id:12,
        name:'Nikon Z 50 Mirrorless Camera',
        img1:'https://i.ibb.co/kSYQ4Lv/nikon-z50.jpg',
        img2:'https://i.ibb.co/6Rj4TdC/nikon-z50-back.jpg',
        price:102522,
        description:'The Nikon Z 50 is a DX-format mirrorless digital camera revolving around the versatile Z Mount. Capable in both stills and video realms, the Z 50 features a 20.9MP CMOS sensor and EXPEED 6 image processor, which enables fast performance up to 11 fps, a reliable 209-point hybrid AF system with eye detection.'
    },
    {
        id:13,
        name:'Panasonic Lumix DC-FZ80',
        img1:'https://i.ibb.co/WtgRm65/panasonic-lumix.jpg',
        img2:'https://i.ibb.co/XyhB1JR/panasonic-lumix-back.jpg',
        price:29830,
        description:'The Lumix DC-FZ80 from Panasonic pairs an expansive 60x zoom lens with high-resolution stills and 4K video shooting functionality. Revolving around an 18.1MP High-Sensitivity MOS sensor, the FZ80 has a top sensitivity of ISO 6400 for working in low-light conditions as well as a 10 fps shooting rate.'
    },
    {
        id:14,
        name:'Panasonic Lumix G95 Mirrorless Camera',
        img1:'https://i.ibb.co/dcDtLVX/panasonic-lumix-g95.jpg',
        img2:'https://i.ibb.co/zG8g1sM/panasonic-lumix-g95-back.jpg',
        price:85463,
        description:'The Lumix G95 from Panasonic is a Micro Four Thirds mirrorless camera also characterized by its sleek and portable design. Featuring a 20.3MP Live MOS sensor and Venus Engine, high-resolution stills can be recorded with a wide sensitivity range of ISO 200-25600.'
    },
    {
        id:15,
        name:'Sony a7 III Mirrorless Camera',
        img1:'https://i.ibb.co/NjF1fzz/sony-a7iii.jpg',
        img2:'https://i.ibb.co/Fz2dzcY/sony-a7iii-back.jpg',
        price:171270,
        description:'Distinguished by its updated sensor design, the Sony a7 III is a well-rounded camera suitable for both photo and video applications in a variety of working situations. Refined for improved speed and low-light performance, the full-frame 24.2MP Exmor R BSI CMOS sensor, and BIONZ X image processor.'
    },
    {
        id:16,
        name:'Sony a7 IV Mirrorless Camera',
        img1:'https://i.ibb.co/5vYMz8h/sony-a7iv.jpg',
        img2:'https://i.ibb.co/74M5MqV/sony-a7iv-back.jpg',
        price:214131,
        description:'An all-arounder that pushes beyond basic, the Sony a7 IV does double duty with strong stills and video performance. An advanced hybrid mirrorless camera, the a7 IV has the resolution and AF performance that appeals to photographers along with robust 4K 60p video recording for filmmakers and content creators.'
    },
    {
        id:17,
        name:'Sony a7R IIIA Mirrorless Camera',
        img1:'https://i.ibb.co/pZ0hPtH/sony-a7r.jpg',
        img2:'https://i.ibb.co/x6Cv30M/sony-a7r-back.jpg',
        price:239847,
        description:'The Sony a7R IIIA is a versatile, high-performance camera characterized by not only its resolution but by its multimedia versatility. Revolving around a full-frame 42.4MP Exmor R BSI CMOS sensor and updated BIONZ X image processor, the a7R IIIA affords an impressive 10 fps continuous shooting rate.'
    },
    {
        id:18,
        name:'Sony Cyber-shot DSC-H300',
        img1:'https://i.ibb.co/sWX7WTJ/sony-cybershot.jpg',
        img2:'https://i.ibb.co/qnHRLXV/sony-cybershot-back.jpg',
        price:16972,
        description:'Sony Cyber-shot DSC-H300 Digital Camera is a point-and-shoot camera featuring a 20.1 MP 1/2.3" Super HAD CCD image sensor for producing high resolution still imagery and HD 720p video. This sensor is benefited by the inclusion of a long-reaching 35x optical zoom lens, giving a 35mm-equivalent focal length range of 25-875mm.'
    },
    {
        id:19,
        name:'Sony ZV-E10 Mirrorless Camera',
        img1:'https://i.ibb.co/KzKj4pf/sony-zv-e10.jpg',
        img2:'https://i.ibb.co/7RFYXcb/sony-zv-e10-back.jpg',
        price:68405,
        description:'The Sony ZV-E10 pairs a large APS-C sensor and mirrorless versatility with a specialized feature-set built just for content creators. Improving upon the ubiquitous smartphone, the ZV-E10 is an Alpha camera that brings improved image quality, greater choice of lenses, and increased control to up your creativity when shooting.'
    }
]