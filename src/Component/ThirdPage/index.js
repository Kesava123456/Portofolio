import './index.css'

const ThirdPage =()=>{

    return(
        <>
        <div className="bg-container">
            <button className="platfrom-btn">The Platform</button>
            <h1 className="platform-head">Enter the New Era of Learning</h1>
            <p>Experience learning by doing with our interactive platform.</p>   
        </div>

<div className="coding-bg">
<div className="coding-leftside-bg">
    <h1>Seamless Learning Experience</h1>
    <p className="coding-leftside-para">Experience learning by doing with our interactiveplatform.</p>
    <div className="left-paras">
        <p>Interactive Exercises: Hands-On Learning</p>
        <p>Integrated Testing: Continuous Assessments</p>
        <p>Practical Skills: Real-World Applications</p>
        <p>Progress Tracking: Monitor Improvement</p>
    </div>
</div>
<div className="coding-rightside-bg">
    <div className="consloe-bg">
        <img 
            src="https://www.kodnest.com/wp-content/uploads/2023/10/black-transparent-1-1.png"
            alt="k"
            className="k-img"
        />
        <p class="code-writing-para">Write your code here</p>
        <p>console.log</p>
        <button>Run</button>
    </div>
  </div>
</div>
</>
    )
}
export default ThirdPage