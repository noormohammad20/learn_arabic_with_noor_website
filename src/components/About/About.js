import React from 'react'
import myimg from '../../images/myimg.JPG'
const About = () => {
    return (
        <div style={{ minHeight: '85vh' }}>
            <h2 className='text-success'>I Am Noor Mohammad</h2>
            <img src={myimg} alt="" />
            <p className='w-50 mx-auto mt-4'>Even four months ago, I had no idea what web development was!  Then I have to do something on my own. I find programming-hero from that urge, and I am learning html, css, js, then react by walking hand in hand with programming hero.  Alhamdulillah!  Now I have a little bit of confidence that I can try to make at least one small landing page, while programming now I have a dream to do something big inside.  But God knows how far I can go!  Programming has now become my meditation-knowledge. After joining programming-hero, I have given up a lot of things.  Pray for me.</p>
        </div>
    )
}

export default About