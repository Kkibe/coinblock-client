import React from 'react';
import './video.css';

export default function Video() {
  return (
    <div className="video">
      <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
      </video>
      <div className="details">
        <div>
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1508919801845-fc2ae1bc2a28%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%253D%253D%26w%3D1000%26q%3D80&tbnid=R4kSBBU37T2shM&vet=12ahUKEwin_IGtyOX-AhXDmycCHRuCB_4QMygJegUIARD0AQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&docid=f3riLA-4-1potM&w=1000&h=637&q=img&ved=2ahUKEwin_IGtyOX-AhXDmycCHRuCB_4QMygJegUIARD0AQ"
            alt="img"
          />
          <h2>Our Video Title Goes Here</h2>
          <div className="more">:</div>
        </div>

                
        <div>
          <div className="channel">Rebirth Group</div>
          <div className="info">
            <span>258k views</span> <span>.</span> <span>3 weeks ago</span>
          </div>
        </div>
      </div>

    </div>
  );
}
