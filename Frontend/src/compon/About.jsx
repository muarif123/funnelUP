import React from 'react'

const About = () => {
  return (
    <section className="bg-white dark:bg-customGray">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
            <p style={{fontWeight:"500"}} className="mb-4">Welcome to our affiliate marketing platform, where opportunity meets innovation. At FunnelUP, we're passionate about empowering individuals and businesses to thrive in the digital landscape. With a commitment to excellence and integrity, we connect advertisers with trusted affiliates, facilitating mutually beneficial partnerships that drive growth and success.</p>
            <p style={{fontWeight:"500"}}>Whether you're an affiliate seeking lucrative opportunities or an advertiser looking to expand your reach, we provide the tools, resources, and support needed to achieve your goals. Join us on this journey and unlock the potential of affiliate marketing like never before.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 overflow-hidden rounded-lg">
            <img className="w-full transition hover:scale-110 rounded-lg" src="https://res.cloudinary.com/diksmyvyt/image/upload/v1714634056/ref2_pywsw8.webp" alt="office content 1"/>
            <img className="mt-4 transition hover:scale-110 w-full lg:mt-10 rounded-lg" src="https://res.cloudinary.com/diksmyvyt/image/upload/v1714634185/REF3_ztalkt.webp"/>
        </div>
    </div>
</section>
  )
}

export default About