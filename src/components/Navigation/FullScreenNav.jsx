import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext } from 'react'
import { useRef } from 'react'
import { NavbarContext } from '../../Context/NavContext'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null);
    const fullScreenRef = useRef(null)
    const tl = useRef(null);   //ChatGPT  Animation 

    const [navOpen, setNavOpen] = useContext(NavbarContext)
    console.log(navOpen);

    // ChatGPT  Animation
    // useGSAP(() => {
    //     tl.current = gsap.timeline({ paused: true });

    //     tl.current
    //         .set('.fullscreennav', { display: "block" })

    //         .from('.stairing', {
    //             height: 0,
    //             stagger: {
    //                 amount: -0.5
    //             }
    //         })

    //         .from('.link', {
    //             opacity: 0,
    //             rotateX: 90,
    //             transformOrigin: 'top',
    //             stagger: {
    //                 amount: 0.3
    //             }
    //         })

    //         .from('.navlink', {
    //             opacity: 0,
    //         });

    //     // 🔥 hide after reverse
    //     tl.current.eventCallback("onReverseComplete", () => {
    //         gsap.set('.fullscreennav', { display: "none" });
    //     });

    // }, []);

    // useGSAP(() => {
    //     if (navOpen) {
    //         tl.current.play();   // open
    //     } else {
    //         tl.current.reverse(); // close (🔥 main part)
    //     }
    // }, [navOpen]);
    // ---------------------------------------------------- ChatGPT  Animation  Close




    function gsapAnimation() {
        const tl = gsap.timeline({
            //   repeat: -1
        })
        tl.to('.fullscreennav', {
            display: "block",
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.5
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            transformOrigin: 'top',
            stagger: {
                amount: 0.3
            }
        })

        tl.to('.navlink', {
            opacity: 1,
        })
    }


    function gsapAnimationReverse() {
        const tl = gsap.timeline({
            //   repeat: -1
        })
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            transformOrigin: 'top',
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.navlink', {
            opacity: 0,
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.2
            }
        })

        tl.to('.fullscreennav', {
            display: "none",
        })

    }


    useGSAP(function () {
        if (navOpen) {
            gsapAnimation();
        } else {
            gsapAnimationReverse();
        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='FullScreenNav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute '>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black '></div>
                    <div className='stairing h-full w-1/5 bg-black '></div>
                    <div className='stairing h-full w-1/5 bg-black '></div>
                    <div className='stairing h-full w-1/5 bg-black '></div>
                    <div className='stairing h-full w-1/5 bg-black '></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                {/* navbar  */}
                <div className='navlink flex w-full justify-between items-start'>

                    {/* logo  */}
                    <div className=''>
                        <div className=" ml-2.5 h-18 w-29">
                            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                                <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>

                    <div
                        onClick={() => {
                            setNavOpen(false);
                        }}
                        className='cross h-20 w-20 mr-2.5 mt-2.5 relative cursor-pointer'>
                        <div className='cross-bg h-28 w-0.5 bg-white absolute -rotate-45 origin-top '></div>
                        <div className='cross-bg h-28 w-0.5 bg-white absolute right-0 rotate-45 origin-top'></div>

                    </div>
                </div>

                {/* Menu  */}
                <div className=' py-7'>
                    <div className='link border-t-1 border-gray-700 relative'>
                        <h1 className='font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Work</h1>
                        <div className='moveLink absolute flex top-0 bg-lime-300 text-black'>
                            <div className='moveX flex items-center'>

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>See Everything</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>See Everything</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>

                            <div className='moveX flex items-center'>

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>See Everything</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>See Everything</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link border-t-1 border-gray-700 relative'>
                        <h1 className='font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Agency</h1>
                        <div className='moveLink absolute flex top-0 bg-lime-300 text-black'>
                            <div className='moveX flex items-center'>

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>know Us</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365" alt="" />

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>know Us</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81" alt="" />
                            </div>

                            <div className='moveX flex items-center'>

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>know Us</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365" alt="" />

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>know Us</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link border-t-1 border-gray-700 relative'>
                        <h1 className='font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Contact</h1>
                        <div className='moveLink absolute flex top-0 bg-lime-300 text-black'>
                            <div className='moveX flex items-center'>

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Send Us A Fax</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />


                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Send Us A Fax</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8753216d2" alt="" />
                            </div>

                            <div className='moveX flex items-center'>

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Send Us A Fax</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Send Us A Fax</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8753216d2" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link border-y-1 border-gray-700 relative'>
                        <h1 className='font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Blog</h1>
                        <div className='moveLink absolute flex top-0 bg-lime-300 text-black'>
                            <div className='moveX flex items-center'>

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Read Articles</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Read Articles</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>

                            <div className='moveX flex items-center'>

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Read Articles</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />

                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase leading-[0.8] pt-4 text-center'>Read Articles</h2>
                                <img className='h-20 w-55 rounded-full mx-4 object-cover shrink-0' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default FullScreenNav