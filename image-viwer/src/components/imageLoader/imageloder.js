
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import './imageLoader.css';
import loadImg from '../../assets/frank-van-mierlo-x35Sw9eCLtA-unsplash.jpg';
import ReactPanZoom from "react-image-pan-zoom-rotate";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function ImageLoader() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
     var imgL = file && file.name.replaceAll(/\s/g, '')
   console.log(file && file.name.replaceAll(/\s/g, ''))
    return (
        <div className="uploader-container">
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            {/* { file && <img src={require(`./${file.name.replaceAll(/\s/g,'')}`)}></img>} */}
            {file &&
                <div className="image-container">
                    <div className="image-size">
                    <ReactPanZoom
                        image={loadImg}
                        alt="test"
                    />
                    </div>
                    <div className="message-container">
                        <p>Does the image look wide enought to you</p>
                        <p>abhijit@constructivIQ.com</p>
                        <div>
                            <div className="button-container">
                        <button>Comment</button>
                        <button >Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
            }


        </div>
    );
}
