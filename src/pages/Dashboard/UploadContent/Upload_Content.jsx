import React from 'react'
import { useDropzone } from 'react-dropzone';

const Upload_Content = () => {
    const dropzoneImage = useDropzone({
        accept: {
          'image/jpeg': [],
          'image/png': [],
        }
    })
    const dropzoneAudio = useDropzone({
        accept: {
          'audio/*':[]
        }
    })
    const dropzoneXlsx = useDropzone({
        accept: {
          'audio/*':[]
        }
    })
  
  const files = dropzoneImage.acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size}
    </li>
  ));
  return <>
   <section className="container ">
    <h3 className='text-center my-4'> Upload Content</h3>
    <div className='d-flex w-100 align-items-center'>
          <div className='w-25 '>
        <h6>Basic MetaData</h6>
         </div>
      <div {...dropzoneImage.getRootProps({className: 'dropzone w-75'})} style={{
        border:"1px dashed gray",
        textAlign:"center",
        margin:"10px 0",
        padding:"10px 0 "
        }}>
       <div >
       <input {...dropzoneImage.getInputProps()} accept="image/png, image/gif, image/jpeg"  />
        <p>Drag files here OR <button className='btn rounded-pill' style={{backgroundColor:"#D3D3D3"}}>Browse Files(.xlsx)</button></p>
       </div>
      </div>
    </div>
    <div className='d-flex w-100 align-items-center'>
    <div className='w-25 '>
        <h6>Audio File</h6>
    </div>
      <div {...dropzoneAudio.getRootProps({className: 'dropzone w-75'})} style={{
        border:"1px dashed gray",
        textAlign:"center",
        margin:"10px 0",
        padding:"10px 0 "
        }}>
       <div >
       <input {...dropzoneAudio.getInputProps()}  />
        <p>Drag files here OR <button className='btn rounded-pill' style={{backgroundColor:"#D3D3D3"}}>Browse Files(.wav,.mp3)</button></p>
       </div>
      </div>
    </div>
    <div className='d-flex w-100 align-items-center'>
    <div className='w-25 '>
        <h6>Inlay / Album Art</h6>
    </div>
      <div {...dropzoneXlsx.getRootProps({className: 'dropzone w-75'})} style={{
        border:"1px dashed gray",
        textAlign:"center",
        margin:"10px 0",
        padding:"10px 0 "
        }}>
       <div >
       <input {...dropzoneXlsx.getInputProps()}  />
        <p>Drag files here OR <button className='btn rounded-pill' style={{backgroundColor:"#D3D3D3"}}>Browse Files(.jpg,.jpeg,.png)</button></p>
       </div>
      </div>
    </div>
      {/* <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside> */}

      <div className='text-center my-5'>
      <button type="button" class="btn btn-info rounded-pill px-4">Upload Now <i class="fa fa-upload" aria-hidden="true"></i>
</button>
      </div>

    </section>
 
  </>
}

export default Upload_Content
