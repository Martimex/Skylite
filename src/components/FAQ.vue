<script setup lang="ts">
import { onMounted } from 'vue';

    function toggleAnswer(event: MouseEvent) {
        event?.currentTarget instanceof Element && event.currentTarget.classList.toggle('active'); 
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.target.classList.toggle(`show`, entry.isIntersecting))
    }, {threshold: 0.5});

    const faqObserver = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if(entry.intersectionRatio > 0) {
                entry.target.classList.add(`show`);
                faqObserver.unobserve(entry.target);
            }
        })
    }, {threshold: .7});

    onMounted(() => {
        const faq_heading = document.querySelector(`.faq-heading`);
        faq_heading && observer.observe(faq_heading);

        const faq_box = document.querySelector( `.faq-box`);
        faq_box && faqObserver.observe(faq_box);
    })

</script>

<template>
    
    <div>

        <p class="faq-heading"> FAQs </p>

        <div class="faq-box"> 

            <div class="faq-item" @click="toggleAnswer">
                <div class="faq-question hover:cursor-pointer">
                    <p class="p-question"> How can I book a meeting? </p>
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
                </div>
                <div class="faq-answer">
                    <p class="p-answer leading-relaxed">
                        To book a free-of-charge, entry meeting with one of our employees, please check out the **(link)** form. There you can pick any date that might
                        be suitable for You. Usually our meetings are hosted online, however You still can request the meeting in our office based in Glasgow, UK.
                        Feel free to book our office appointment either online or by calling us. 
                    </p>
                </div>
            </div>

            
            <div class="faq-item" @click="toggleAnswer">
                <div class="faq-question hover:cursor-pointer">
                    <p class="p-question"> What is the pricing for your services? </p>
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
                </div>
                <div class="faq-answer">
                    <p class="p-answer leading-relaxed">
                        The final price is not completely based on the service type You want to choose. Since every client have individual goals to accomplish, our 
                        pricing policy goes hand-in-hand with those specific needs to fit our Customers budget well. We highly advise You to phone us in order to get 
                        an estimated quote in just a single call.
                    </p>
                </div>
            </div>

            
            <div class="faq-item" @click="toggleAnswer">
                <div class="faq-question hover:cursor-pointer">
                    <p class="p-question"> Do you offer some discounts? </p>
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
                </div>
                <div class="faq-answer">
                    <p class="p-answer leading-relaxed">
                        Absolutely! Our regular customers can expect several discounts yearly, ranging from 5% up to 10%. Also, by becoming our Collaborator, some
                        higher discounts can be applied for all the services Skylite offers - with no yearly limit specified. If you want to enjoy those and more 
                        benefits, refer this **(link)** to apply for a Collaborator status.
                    </p>
                </div>
            </div>

            <div class="faq-item" @click="toggleAnswer">
                <div class="faq-question hover:cursor-pointer">
                    <p class="p-question"> Are you open on weekends? </p>
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="custom-icon" />
                </div>
                <div class="faq-answer">
                    <p class="p-answer leading-relaxed">
                        Our office is open only on weekdays, from 8:00 AM until 6:00 PM. However, You can still reach us every Saturday by calling us or writing an
                        e-mail. Please note that these days we work remotely till 4:00 PM, and we are not available on Sundays. 
                    </p>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>

    .faq-heading {
        padding-bottom: 5vh;
        font-size: 5.2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: .75em;
        color: #0000;
        -webkit-text-stroke: .075rem #ddd;

        transition: all 500ms ease-out;
            opacity: 0;
            scale: .9;
            color: #000f;
    }

    .faq-heading.show {
        opacity: 1;
        scale: 1;
        color: #0000;
    }

    .faq-box {
        width: 80%;
        max-width: 60rem;
        margin: 0 auto;
        padding-bottom: 15vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ddd;
    }

    .faq-item {
        font-size: 1rem;
        padding-top: 2em;
        border-bottom: .25em solid #ccc;
    
        transition: all 800ms ease-in-out;
            opacity: 0;
            transform: translateY(2rem) translateX(2rem);
    }

    .faq-item:nth-of-type(2n) {
        transform: translateY(2rem) translateX(-2rem);
    }

    .faq-box.show .faq-item {
        opacity: 1;
        transform: translateY(0rem) translateX(0rem);
    }

    .faq-question {
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: .5em;
    }

    .p-question {
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: .05em;
    }

    .custom-icon {
        font-size: 2.2rem;
    }

    .faq-answer {
        line-height: 1.5;
        /* Keeping the answer initially hidden */
        max-height: 0;
        overflow: hidden;
        transition: max-height 600ms ease-in-out;
    }

    .p-answer {
        font-size: 1.15rem;
        margin-bottom: .75em;
    }

    .p-answer:hover {
        cursor: pointer;
    }

    .faq-item.active .faq-answer {
        /* Once .active is applied, the answer shows up */
        max-height: 18rem;
    }

    .faq-item.active .custom-icon {
        transform: rotate(180deg);
    }

    .custom-icon {
        transition: transform 500ms ease-in;
    }

    @media screen and (orientation: portrait)   {
        .faq-heading {
            font-size: 6rem;
            padding-bottom: 0;
        }

        .faq-box {
            width: 85%;
            padding-bottom: 5vh;
        }

        .custom-icon {
            margin-left: 2.5rem;
        }

        .p-question {
            font-size: 2.2rem;
            font-weight: 600;
            letter-spacing: .05em;
            margin-left: .5rem;
        }

        .p-answer {
            font-size: 1.3rem;
            margin-block: .5em;
            line-height: 160%;
            margin-left: 1rem;
        }

    }


    @media screen and (orientation: landscape) and (max-width: 986px) {

        .faq-heading{
            padding-bottom: 0;
        }

        .p-answer {
            font-size: 1.25rem;
            margin-block: 1em;
        }

    }

</style>