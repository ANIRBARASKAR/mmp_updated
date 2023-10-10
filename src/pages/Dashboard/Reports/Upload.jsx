  import React from 'react'
  import { useDropzone } from 'react-dropzone';

  const Upload = () => {
    
    const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps
    } = useDropzone({
      accept: {
        'image/jpeg': [],
        'image/png': []
      }
    })
    
    const acceptedFileItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
    return <>
  
    <div className="container">   
            <h3 className='text-uppercase text-center mb-5'>Upload Content</h3>     
      <div className="row">
        <div className="col-sm-4">
        <div className='d-flex align-items-center m-2 gap-4'>
        <label htmlFor="" className=''>Label</label>
        <button type="button" class="btn btn-secondary btn-sm rounded-pill w-50 ">Add New</button>
        </div>
          <input type="text" style={{height:"35px"}} className='rounded' />
        </div>
        <div className="col-sm-4">
          <label htmlFor="">Title</label>
          <input type="text"  style={{height:"35px"}} className='rounded' />
        </div>
        <div className="col-sm-4">
          <label htmlFor="">UPC</label>
          <input type="text"  style={{height:"35px"}} className='rounded' />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-sm-4">
          <label htmlFor="releaseDate">Date of release</label>
          <input type="date" className='rounded' id='releaseDate' min="2023-01-01" max="2023-12-31"  style={{height:"35px"}} />
        </div>
        <div className="col-sm-4">
          <label htmlFor="liveDate">Go Live Date</label>
          <input type="date" id='liveDate' min="2023-01-01" max="2023-12-31" className='rounded'  style={{height:"35px"}} />
        </div>
        <div className="col-sm-4">
          <label htmlFor="">Content Type</label>
          <input type="text" className='rounded'  style={{height:"35px"}}/>
        </div>
      </div>
      
      <div className='w-auto align-items-center my-5'>
      <div className="row my-3">
        <label htmlFor="">Inlay/Album Art</label>
        <label htmlFor="">Upload inlay having name "Album Title(.jpg/.png)"</label>
      </div>
        <div {...getRootProps({className: 'dropzone w-100'})} style={{
          border:"1px dashed gray",
          textAlign:"center",
          margin:"10px 0",
          padding:"10px 0 ",
          }}>
        <div >
        <input {...getInputProps()} accept="image/png, image/gif, image/jpeg" className='rounded' />
          <p>Drag files here OR <button className='btn btn-secondary rounded-pill'>Browse Files(.jpg,.jpeg,.png)</button></p>
        </div>
        </div>
      </div>
    </div>
    <hr />

    <h4>SONG 1</h4>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <label htmlFor="title">Title</label>
          <input type="text" id='title' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="isrc">ISRC</label>
          <input type="text" id='isrc' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="language">Language</label>
          <input type="text" id='language' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="date">Go Live Date</label>
          <input type="text" id='date'style={{height:"35px"}} className='form-control rounded'/>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-sm-3">
          <label htmlFor="genre">Genre</label>
          <input type="text" id='genre'style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="sub">Sub Genre</label>
          <input type="text" id='sub' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="mood">Mood</label>
          <input type="text" id='mood' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="desc">Description</label>
          <input type="text" id='desc' style={{height:"35px"}} className='form-control rounded'/>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-sm-3">
          <label htmlFor="singer">Singer</label>
          <input type="text" id='singer' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="compo">Composer</label>
          <input type="text" id='compo' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="mood">Director</label>
          <input type="text" id='mood'style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="pro">Producer</label>
          <input type="text" id='pro' style={{height:"35px"}} className='form-control rounded'/>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-sm-3">
          <label htmlFor="star">Star Cast</label>
          <input type="text" id='star' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="ly">Lyricist</label>
          <input type="text" id='ly' style={{height:"35px"}} className='form-control rounded'/>
        </div>
        <div className="col-sm-3">
        <label htmlFor="is">Is explicite</label>
          <div class="form-check">
            <input class="form-check-input form-control rounded" style={{height:"35px"}} type="checkbox" value="" id="is" />
          </div>
        </div>
        
      </div>
    
      <div className='w-auto align-items-center my-5'>
      <div className="row my-3">
        <label htmlFor="">Audio File (.wav)</label>  <br />
        <span>FileName Should be Track + (.wav)Track ISRC + (.wav)</span>
      </div>
        <div {...getRootProps({className: 'dropzone w-100'})} style={{
          border:"1px dashed gray",
          textAlign:"center",
          margin:"10px 0",
          padding:"10px 0 ",
          }}>
        <div >
        <input {...getInputProps()} accept="image/png, image/gif, image/jpeg" className='rounded' />
          <p>Drag files here OR <button className='btn btn-secondary rounded-pill'>Browse Files(.wav,.mp3)</button></p>
        </div>
        </div>
      </div>
    </div>
      <div className="container">
          <h5>CRBT 1 </h5>
          <div className="row my-4">
              <div className="col-sm-6">
                  <label htmlFor="">Title</label>
                  <input type="text"  style={{height:"35px"}} />
              </div>
              <div className="col-sm-6">
                  <label htmlFor="">Start Time[hh:mm:ss]</label>
                  <input type="time" style={{height:"35px"}} />
              </div>
          </div>
      </div>
      <div className='text-center my-5' >
      <button type="button" class="btn btn-info rounded w-full">ADD CRBT</button> 
      </div>
      <hr />
      <div className="container">
          <div className='d-flex '>
          <h5>CRBT 2</h5>
          <button className='btn btn-light mx-3'>_Remove</button>
          </div>
          <div className="row my-3">
              <div className="col-sm-6">
                  <label htmlFor="">Title</label>
                  <input type="text"  style={{height:"35px"}} />
              </div>
              <div className="col-sm-6">
                  <label htmlFor="">Start Time[hh:mm:ss]</label>
                  <input type="time" style={{height:"35px"}} />
              </div>
                      </div>
      </div>
      <div className='text-center my-5' >
      <button type="button" class="btn btn-info rounded w-full">ADD CRBT</button> 
      </div>

      <div className='text-center' >
      <button type="button" class="btn btn-info rounded w-full">ADD SONG</button> 
      </div>
      <p>Duplicate Album</p>
      <p></p>

      
    
    </>
  }

  export default Upload
