"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function WavyText() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            const { chars } = splitText(
                containerRef.current.querySelector(".wavy")!
            )
            containerRef.current.style.visibility = "visible"

            const staggerDelay = 0.15

            animate(
                chars,
                { y: [-20, 20] },
                {
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    duration: 2,
                    delay: stagger(
                        staggerDelay,
                        // By setting this as a negative delay we can start
                        // the animation part-way through, to ensure we don't
                        // get an initial iteration where the characters look
                        // like they're starting to animate one by one.
                        { startDelay: -staggerDelay * chars.length }
                    ),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1">
                What&rsquo;s on your <span className="wavy">miiiind</span> today? 
            </h1>
            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            }

            .split-char {
                will-change: transform, opacity;
            }
        `}</style>
    )
}
