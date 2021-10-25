import React from 'react';
//import XLSX from 'xlsx';
//var FileSaver = require('file-saver');

const ItemDetail = () => {
const style = {
        width: "100%"
    }
    //const { name, image, price, amount } = { 
    //    name:"Carlos",
    //    image:"Carlos.png", 
    //    price:10,
    //    amount:20
    //};

    //const download2 = () => {
    //    var ws_data = [
    //        ['hello'],
    //        ['world']
    //    ]

    //    /* new workbook */
    //    var wb = XLSX.utils.book_new();
    //    wb.Props = {
    //        Title: "SheetJS Tutorial",
    //        Subject: "Test",
    //        Author: "Maidana Marcos",
    //        CreatedDate: new Date(2017,12,19)
    //    };
    //    wb.SheetNames.push("Test Sheet");

    //    var ws = XLSX.utils.aoa_to_sheet(ws_data);

    //    wb.SheetNames['Test Sheet'] = ws;

    //    var wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'})

    //    function s2ab(s) {
    //        var buf = new ArrayBuffer(s.length);
    //        var view = new Uint8Array(buf);
    //        for ( var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    //        return buf;
    //    }
    //    

    //    const url = window.URL.createObjectURL( new Blob([s2ab(wbout)]),);
    //    console.log(url);
    //    const link = document.createElement('a');
    //    link.href = url;
    //    // Create blob link to download
    //    link.setAttribute( 'download', `FileName.xls`,);
    //    document.body.appendChild(link);
    //    // Start download
    //    link.click();
    //    // Clean up and remove the link
    //    link.parentNode.removeChild(link);

    //}

    //const download = () => {
    //    fetch(`${process.env.PUBLIC_URL}/logo192.png`, {
    //        method: 'GET',
    //        headers: {
    //            'Content-Type': 'application/pdf',
    //        },
    //    })
    //    .then((response) => response.blob())
    //    .then((blob) => {
    //        // Create blob link to download
    //        const url = window.URL.createObjectURL(
    //            new Blob([blob]),
    //            );
    //            const link = document.createElement('a');
    //            link.href = url;
    //        // Create blob link to download
    //            link.setAttribute( 'download', `FileName.pdf`,);
    //            document.body.appendChild(link);
    //            // Start download
    //            link.click();
    //            // Clean up and remove the link
    //            link.parentNode.removeChild(link);
    //        });
    //    }

    return (
        <>
        <div className="container">    
            <div className="row">    
                <div className="col-sm-7">
                    <img src="https://via.placeholder.com/750x500" className="img-responsive" style={style} alt=""/>
                </div>
        
                <div class="col-md-3">
                    <h3 class="my-3">Project Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                    <h3 class="my-3">Project Details</h3>
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Dolor Sit Amet</li>
                        <li>Consectetur</li>
                        <li>Adipiscing Elit</li>
                    </ul>
                </div>
        
                <div className="col-sm-2 pull-right">
                    <div className="btn-group-vertical">
                        <form>
                            <select className="form-control" style={{marginBottom: 15}}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </form>
                        <button style={{marginBottom: 15}} type="button" className="btn btn-lg">Add to cart</button>
                        <button type="button" className="btn btn-primary btn-lg"> Buy it now</button>
                    </div>
                </div>


            </div>
        </div>
        <div className="container">    
            <div className="row">    
            </div>
        </div>
 
        </>
    )
}

export default ItemDetail;