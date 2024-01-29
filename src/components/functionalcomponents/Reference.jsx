import {useState,useRef,useEffect} from "react"
const Reference=()=>{
const [batchSize,updateBatchSize]=useState("");
        const prevBatch=useRef(batchSize);
        useEffect(() => {
            prevBatch.current = batchSize;
        },[batchSize]);
    
    return(
        <div>
      <h1>  Example of useref</h1>
      <input type="text" onChange={(event)=>{updateBatchSize(event.target.value)}}></input>
      <h2>Previous Batchsize: {prevBatch.current}</h2>
      <h2>The text is Batchsize: {batchSize}</h2>
        </div>
    )
}
export default Reference;