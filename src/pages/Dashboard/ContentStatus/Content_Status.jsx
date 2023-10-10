import React from 'react'

const Content_Status = () => {

    const arr = [
    { Album:"file",
      AlbumId:"OMTROBKC44A2023",
      UPC:'8905443536367',
      Sublevel:'Music Test Records',
      language:'Haryanvi',
      CRBTStatus:'Pending',
      GoLive:'Jun 18, 2023',
      Date:"Jun 01,0001 05:53:28",
      Uploaded:'Mehra Records Entertaintment'
    },
    { Album:"file",
      AlbumId:"OMTROBKC44A2023",
      UPC:'8905443536367',
      Sublevel:'Music Test Records',
      language:'Haryanvi',
      CRBTStatus:'Pending',
      GoLive:'Jun 18, 2023',
      Date:"Jun 01,0001 05:53:28",
      Uploaded:'Mehra Records Entertaintment'
    },
    { Album:"file",
      AlbumId:"OMTROBKC44A2023",
      UPC:'8905443536367',
      Sublevel:'Music Test Records',
      language:'Haryanvi',
      CRBTStatus:'Pending',
      GoLive:'Jun 18, 2023',
      Date:"Jun 01,0001 05:53:28",
      Uploaded:'Mehra Records Entertaintment'
    },
    ]
  return <>
  <div >
    <h3 className='text-center fw-bolder my-5'>Content Status(Pending Songs)</h3>
    <div className='row'>
    <button type='button' className='btn mx-2 rounded-pill text-uppercase' style={{backgroundColor:"#D3D3D3"}}>EnableMulti-SelectMode</button>
    <button type='button' className='btn rounded-pill text-uppercase' style={{backgroundColor:"#D3D3D3"}}>+ Export Album</button>

    </div>
    <div className="row my-3">
       
        <div className='d-flex input-group '>
      <select class="form-select rounded">
        <option selected>Select a Filter</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
        <input type="text" className="mx-2 form-control rounded" placeholder='Search'  />
        <button type='button' className='btn btn-secondary rounded'>+</button>
        </div>
    </div>
      
      <div className="horizontal-scrollable" style={{overflowX: "auto", whiteSpace: "nowrap", color:"black"}}>          
    <table class="table table-striped">
      <thead className='table-dark align-items-center '>  
        <tr>
          <th scope="col">#</th>
          <th scope="col">Album</th>
          <th scope="col">Album Id</th>
          <th scope="col">UPC</th>
          <th scope="col">Sublevel</th>
          <th scope="col">language</th>
          <th scope="col">CRBTStatus</th>
          <th scope="col">GoLive</th>
          <th scope="col">Date</th>
          <th scope="col">Uploaded Date</th>
          <th scope="col">Uploaded Date</th>
          <th scope="col">Uploaded Date</th>
        </tr>
      </thead>
      <tbody>
        {
        arr.map((item, i) => <tr key={item.i} className='mb-5' >
          <td>{i +1}</td>
          <td>{item.Album}</td>
          <td>{item.AlbumId}</td>
          <td>{item.UPC}</td>
          <td>{item.Sublevel}</td>
          <td>{item.language}</td>
          <td>{item.CRBTStatus}</td>
          <td>{item.GoLive}</td>
          <td>{item.Date}</td>
          <td>{item.Uploaded}</td>
          <td>{item.Uploaded}</td>
          <td>{item.Uploaded}</td>
        </tr> )
        }
      </tbody>
    </table>
  </div>
      </div>

  <div className="d-flex my-3">
     <span>Entries Per page : </span>
      <input type="number" className='w-25' />
  </div>
  </>
}

export default Content_Status
