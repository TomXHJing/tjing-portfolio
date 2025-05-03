//  src\components\ProjectLink.jsx

// ProjectLink component usage:
// 
// > Required props:
// - title:        Main title of the project (bold text)
// - img:          Image shown on the right of the sliding panel (required)
// 
// Optional props:
// - link:         Main project link (shown under the slider)
//                 Accepts:
//                   - actual URL string: clickable "Visit project"
//                   - "WIP":              shows "Under construction"
//                   - "CO":               shows "Community only"
//                   - "UNA":              shows "Unavailable"
//                   - null:               displays nothing
//
// - doc:          Internal link to documentation or details page
//                 If provided: shows a document icon that links to the page
//                 If null:     no icon is shown
//
// - repo:         External GitHub repo link
//                 If provided: shows a GitHub icon that links to repo
//                 If null:     no icon is shown
//
// - languages:    CSV string of primary languages (e.g., "JS, HTML, CSS")
//                 Displayed as bolded text before the pipe `|`
//
// - tags:         CSV string of additional tags or tools (e.g., "Tailwind, R3F")
//                 Displayed as thinner text after the pipe `|`

import { useState,useEffect } from 'react';
import { IoLogoGithub, IoDocumentTextOutline } from "react-icons/io5";
import { motion, useMotionValue, animate } from 'framer-motion';

export default function ProjectLink({ title, subtitle, link, doc, repo, img, languages, tags }) {
    const x = useMotionValue(0);
    const [locked, setLocked] = useState(false);
    const [slideDistance, setSlideDistance] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
        const width = window.innerWidth;
        const dist = Math.round(width * 0.4); 
        x.set(0);
        setSlideDistance(dist);
    
        animate(x, 0, {
            type: 'spring',
            stiffness: 300,
            damping: 100,
        });
    
        setLocked(false);
        };
    
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);  

    const handleDragEnd = (_, info) => {
        const threshold = slideDistance*0.25;
        const shouldOpen = info.offset.x > threshold;

        animate(x, shouldOpen ? slideDistance : 0, {
        type: 'spring',
        stiffness: 300,
        damping: 100,
        });

        setLocked(shouldOpen);
    };

  return (
    <section className="flex justify-center w-full py-1">
        <div className="flex items-center w-full max-w-[87.5%] mx-auto">

            {/* Left Bracket */}
            <div className="text-[7rem] -translate-y-4 leading-none text-center select-none text-fore-dark dark:text-fore-light">[</div>

            <div className="relative mx-10 w-full h-[5rem] overflow-hidden rounded-3xl ring-1 ring-white/5 shadow-lg mx-auto">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: slideDistance }}
                    onDragEnd={handleDragEnd}
                    style={{ x }}
                    className="absolute top-0 left-0 w-[100%] h-full flex z-20"
                >
                    {/* LEFT: Main content (always visible): W balanced with Right */}
                    <div className="w-[50%] p-4 flex items-center gap-4 bg-fore-dark dark:bg-fore-light backdrop-blur-sm">
                        {/* Dragger handle */}
                        <div className="cursor-ew-resize text-3xl -translate-y-1 select-none opacity-40">||</div>

                        {/* Title, subtitle, and tags */}
                        <div>
                        <div>
                            <span className="text-xl font-bold">{title}</span>
                            {subtitle && (
                                <span className="text-lg px-0.5">: {subtitle}</span>
                            )}
                        </div>
                        <div className="text-sm opacity-80">
                            {languages?.split(',').map((s, i) => (
                            <span key={i} className="font-bold mr-2">{s.trim()}</span>
                            ))}
                            <span>|</span>
                            {tags?.split(',').map((s, i) => (
                            <span key={i} className="ml-2">{s.trim()}</span>
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* RIGHT: Hidden drawer with image and link : W balanced with Left */}
                    <div className="w-[50%] h-full relative bg-back-dark dark:bg-back-light flex items-center">
                        <img
                            src={img}
                            alt="Project image"
                            className="w-[100%] object-cover opacity-95"
                        />
                    </div>
                </motion.div>

                {/*links, repos, and docs*/}
                <div className="absolute z-10 w-full left-9 top-6 text-xl font-bold flex justify-between items-center max-w-[45%]">

                    {/* Left: Link */}
                    <div className="text-left">
                        {link && link !== "WIP" && link !== "CO" && link !== "UNA" ? (
                        <a href={link} target="_blank" className="underline hover:text-blue-400">
                            Visit project here!
                        </a>
                        ) : link === "CO" ? (
                        <span>Sorry, closed community access only.</span>
                        ) : link === "WIP" ? (
                        <span>Project under construction, come back later!</span>
                        ) : link === "UNA" ? (
                        <span>Sorry, link currently unavailable.</span>
                        ) : null}
                    </div>

                    {/* Right: Repo & Doc Icons */}
                    <div className="flex items-center gap-3 text-right">
                        {doc && (
                            <IoDocumentTextOutline 
                                title="Document link"
                                className="w-9 h-9 cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onClick={() => window.open(doc, '_blank')}
                            />
                        )}
                        {repo && (
                            <IoLogoGithub 
                                title="Github link"
                                className="w-9 h-9 cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onClick={() => window.open(repo, '_blank')}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Right Bracket */}
            <div className="text-[7rem] -translate-y-4 leading-none text-center select-none text-fore-dark dark:text-fore-light">]</div>
        </div>
    </section>
  );
}
