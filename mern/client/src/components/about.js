import "./about.css"
export default function Home() {
return(
  <>
    <div className="aboutBox">
      <h1>Is Death Grips Online?</h1>
      <h2><em> Made by <a href="https://github.com/vcabiya" target="_blank" rel="noreferrer">vcabiya</a></em></h2>
    </div>
    <div className="paraContainer">
    <div className="rightPara">
      <h1>Methodology</h1>
      <ul>
      <li><h3>Any documented evidence of activity as a group is counted, so long as it be
        willingly produced by the band. Something like a paparazzi sighting wouldn't count.
      </h3></li>
      <li><h3>About a month-long grace period will be used after the group ends a large undergoing,
        like an album release or the end of a tour. After this period, the site will return to showing
        them as offline.
      </h3></li>
      </ul>
    </div>
    <div className="leftPara">
      <h1>About</h1>
      <h3>I wanted to make this site for easy access to information regarding the status of one 
      of my favorite bands, so I spent a bit of time making this one! This is my first time making
        a web development project of this scale, which probably shows. If there's any glaring security issues
        or anything, please let me know! (Seriously.) The github repo is <a href="https://github.com/vcabiya/death-grips">
          here</a> if it concerns anyone. Have a nice day!</h3>
    </div>
    </div>
  </>
)
}
