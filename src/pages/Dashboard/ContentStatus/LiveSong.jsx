import React from 'react'

const LiveSong = () => {

    const arr = [
        { 
        Facebook_AAP:"Live",
        Facebook_SRP:"Live",
        Wynk:'Processed',
        JioSavvan:'Processed',
        Amazon:'Live',
        RESSO:'Live',
        Ganna:'Processed',
        iTunes:"Live",
        YouTubeCMS:'Music:Processed  Content :Processed',
        SoundsCloud:'-',
        AtlantisCBRT:'Processed',
        JioCBRT:'Processed',
        Pandora:'-',
        Deezer:'-',
        Snap:'Live',
        Anghami:'Processed',
        Tiktok:'Live',
        Facebook:'-',
        Hungama:'Processed',
        },
        { 
        Facebook_AAP:"Live",
        Facebook_SRP:"Live",
        Wynk:'Processed',
        JioSavvan:'Processed',
        Amazon:'Live',
        RESSO:'Live',
        Ganna:'Processed',
        iTunes:"Live",
        YouTubeCMS:'Music:Processed  Content :Processed',
        SoundsCloud:'-',
        AtlantisCBRT:'Processed',
        JioCBRT:'Processed',
        Pandora:'-',
        Deezer:'-',
        Snap:'Live',
        Anghami:'Processed',
        Tiktok:'Live',
        Facebook:'-',
        Hungama:'Processed',
        },
        { 
        Facebook_AAP:"Live",
        Facebook_SRP:"Live",
        Wynk:'Processed',
        JioSavvan:'Processed',
        Amazon:'Live',
        RESSO:'Live',
        Ganna:'Processed',
        iTunes:"Live",
        YouTubeCMS:'Music:Processed  Content :Processed',
        SoundsCloud:'-',
        AtlantisCBRT:'Processed',
        JioCBRT:'Processed',
        Pandora:'-',
        Deezer:'-',
        Snap:'Live',
        Anghami:'Processed',
        Tiktok:'Live',
        Facebook:'-',
        Hungama:'Processed',
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
        <th scope="col">Facebook_AAP WW</th>
        <th scope="col">Facebook_SRP WW</th>
        <th scope="col">Wynk</th>
        <th scope="col">JioSavvan</th>
        <th scope="col">Amazon IN</th>
        <th scope="col">RESSO-Bytendance</th>
        <th scope="col">Ganna</th>
        <th scope="col">iTunes</th>
        <th scope="col">YouTubeCMS</th>
        <th scope="col">SoundsCloud</th>
        <th scope="col">AtlantisCBRT</th>
        <th scope="col">JioCBRT</th>
        <th scope="col">Pandora</th>
        <th scope="col">Deezer</th>
        <th scope="col">Snap</th>
        <th scope="col">Anghami</th>
        <th scope="col">Tiktok ByteDabce</th>
        <th scope="col">Facebook</th>
        <th scope="col">Hungama</th>
      </tr>
    </thead>
    <tbody>
      {
      arr.map((item, i) => <tr key={item.i} className='mb-5 text-center' >
        <td>{item.Facebook_AAP}</td>
        <td>{item.Facebook_SRP}</td>
        <td>{item.Wynk}</td>
        <td>{item.JioSavvan}</td>
        <td>{item.Amazon}</td>
        <td>{item.RESSO}</td>
        <td>{item.Ganna}</td>
        <td>{item.iTunes}</td>
        <td>{item.YouTubeCMS}</td>
        <td>{item.SoundsCloud}</td>
        <td>{item.AtlantisCBRT}</td>
        <td>{item.JioCBRT}</td>
        <td>{item.Pandora}</td>
        <td>{item.Deezer}</td>
        <td>{item.Snap}</td>
        <td>{item.Anghami}</td>
        <td>{item.Tiktok}</td>
        <td>{item.Facebook}</td>
        <td>{item.Hungama}</td>
      </tr> )
      }
    </tbody>
  </table>
</div>
    </div>

<div className="d-flex my-3">
   <span>Entries Per page : </span>
    <input type="number" value='15' className='w-25' />
    <select name="" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
</div>
</>
}

export default LiveSong
