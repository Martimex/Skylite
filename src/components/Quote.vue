<script setup lang="ts">
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { onMounted, getCurrentInstance } from 'vue';


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add(`show`);
            observer.unobserve(entry.target);
        }
    })   
}, {threshold: .7});

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    const globalProps = getCurrentInstance()?.appContext.config.globalProperties;
    let mm = gsap.matchMedia();

    const quote_layout = document.querySelector(`.quote-layout`);
    quote_layout && observer.observe(quote_layout);

    mm.add(`${globalProps?.gsapBreakpoints.isTablet}, ${globalProps?.gsapBreakpoints.isDesktop}`, () => { 
        gsap.to(`#main-start`, {
            scrollTrigger: {
                trigger: `#main-start`,
                start: '0% 0%',
                end: '100% 0%',
                scrub: 1,
            },
            y: '20vh',
        })
    })

})

</script>

<template>
    <div class="quote-layout">
        <div class="quote-box-svg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg5" width="288" height="204" version="1.1" viewBox="0 0 76.2 53.975">
                <defs id="defs5"><path id="rect406" d="M-.7632.3816h288.1128v203.3962H-.7632z"/>
                    <path id="rect6053" d="M97.411 109.8234h99.8395v37.2374H97.411z"/>
                    <path id="rect6047" d="M161.632 95.2523h109.2838v88.5064H161.632z"/>
                    <path id="rect6041" d="M162.9812 46.142h44.523v53.6975h-44.523z"/>
                    <path id="rect6035" d="M80.4113 106.8552h128.9818v75.824H80.4113z"/>
                    <path id="rect6005" d="M99.2998 41.5548h43.9833v39.3961H99.2998z"/>
                    <path id="rect5950" d="M88.9143 58.3858h80.1373v76.3213H88.9143z"/>
                    <path id="rect5944" d="M4.5793 6.4873H71.742v197.6721H4.5793z"/>
                    <path id="rect393" d="M1.0793-14.3013h287.106v44.523H1.0793z"/>
                </defs>
                
                <defs id="defs2">
                    <linearGradient xlink:href="#linearGradient3991" id="linearGradient8431" x1="27.8892" x2="27.5168" y1="54.3963" y2="26.0515" gradientUnits="userSpaceOnUse" spreadMethod="reflect"/>
                    <linearGradient id="linearGradient3991">
                        <stop id="stop3987" offset="0" stop-color="#103836" stop-opacity="1"/>
                        <stop id="stop3989" offset="1" stop-color="#18797e" stop-opacity=".7176"/>
                    </linearGradient>
                </defs>
                
                <g id="layer1">
                    <g id="g8427" stroke="url(#linearGradient8431)" style="mix-blend-mode:normal" transform="translate(8.4414 -5.8482)">
                        <text xml:space="preserve" id="text404" fill="#000" fill-opacity="0" fill-rule="evenodd" stroke="#fff" stroke-dasharray="0,121" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="1" stroke-width=".5039" font-family="Rockwell Nova" font-size="32" opacity=".75" style="-inkscape-font-specification:&quot;Rockwell Nova, Normal&quot;;text-align:center;white-space:pre;shape-inside:url(#rect406)" transform="matrix(.7876 0 0 .7876 -83.6008 18.5186)">
                            <tspan id="tspan355" class="no-targetable" x="111.4642" y="28.0893">SKY</tspan>
                        </text>
                    </g>
                </g>        
            </svg>
        </div>
        <div class="quote-box-text">
            <p class="qbt-paragraph paragraph-1"> IS THE LIMIT </p>
            <p class="qbt-paragraph paragraph-2"> IT'S TRUE FOR US </p>
        </div>

    </div>
</template>

<style scoped>

    .quote-layout {
        position: relative;
        min-height: 100vh;
        color: #ddd;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
    }

    .quote-box-svg {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .quote-box-text {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: column;
        margin-top: 1.5rem;
    }

    .qbt-paragraph {
        font-size: 4rem;
        display: inline-block;
        font-weight: 700;
        text-align: center;
        color: #0000;
        -webkit-text-stroke: .075rem #ddd;
    }

    .paragraph-1 {
        transition: all 500ms linear;
            transform: translateY(-1rem);
            scale: 0.85;
            opacity: 0;
    }

    .quote-layout.show .paragraph-1 {
        transform: translateY(0rem);
        scale: 1;
        opacity: 1;
    }

    .paragraph-2 {
        color: #000;
        padding-inline: 1.5rem;
        border-radius: 9999px;
        -webkit-text-stroke: .075rem #111;
        background: #ddd0;

        transition: all 500ms linear 500ms;
            transform: translateY(-1rem);
            scale: 0.85;
            opacity: 0;
            background: #ddd0;
    }

    .quote-layout.show .paragraph-2 {
        transform: translateY(0rem);
        scale: 1;
        opacity: 1;
        background: #bbb;
    }

    #svg5 {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: .1em;
        scale: 2.5;
        filter: drop-shadow(0 0 0.75rem #eee) brightness(125%);
        text-shadow: 0rem 0rem 1em #eee;
    }

    .quote-layout #text404 {
        transition: all 1500ms linear;
            stroke-dasharray: 0,121;
            /* stroke-dasharray: 101,121; */
            /* stroke-dasharray: 131,121; */
            opacity: 0;
    }

    .quote-layout.show #text404 {
        stroke-dasharray: 131,121;
        opacity: 1;
    }


    /* Portrait mobiles */

    @media screen and (orientation: portrait)   {
        .quote-layout {
            min-height: fit-content;
            padding-block: 12.5vh;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
        }

        #svg5 {
            scale: 1.6;
        }

        .quote-layout #text404 {
            stroke-dasharray: 131,121;
        }

        .quote-box-text {
            margin-bottom: 3rem;
        }

        .qbt-paragraph {
            font-size: 3.6rem;
            white-space: nowrap;
        }
    }

    @media screen and (orientation: portrait) and (max-height: 800px) {
        .quote-layout {
            padding-block: 12.5vh;
        }
    }

    
    /* Lanscape mobiles */

    @media screen and (orientation: landscape) and (max-width: 986px) {

        .quote-layout #text404 {
            stroke-dasharray: 131,121;
        }
        
        #svg5 {
            max-height: 33vh;
        }

        .quote-box-svg {
            margin-bottom: 0rem;
        }

        .quote-box-text {
            margin-top: 0rem;
        }
    }

</style>