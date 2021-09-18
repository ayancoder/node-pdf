const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const doc = new PDFDocument({ margin: 30, size: 'A4' });
  
  // file name
doc.pipe(fs.createWriteStream("./file-table.pdf"));
  


/* var tickets = [
    {
      "docketId": "PUR-II/9-13-2021/3",
      "subject": "ticket with office",
      "source": "Panchayat",
      "creator": "ranga"
       
    },
    { "docketId": "PUR-II/9-13-2021/3",
      "subject": "ticket with office",
      "source": "Panchayat",
      "creator": "ranga"
    },
  ] */
  const tickets = [
    {
      "state": "NEW",
      "_id": "6140bf56efb0739312d828e3",
      "subject": "creating ticket",
      "source": "State",
      "creator": {
          "_id": "613f474c9ff1747ec05d9905",
          "name": "ranga jana"
      },
      "filePath": "/uploads/2021-09-14T15:27:14.984Zimage.jpg",
      "createDate": "2021-09-14T15:27:18.656Z",
      "docketId": "PUR-II/9-14-2021/4"
  }
  ]
  const header = [
    { "label":"docketId", "property":"docketId", "width":100 },
    { "label":"state", "property":"state", "width":100 },
    { "label":"subject", "property":"subject", "width":100 },
    { "label":"source", "property":"source", "width":100 },
    { "label":"Assigned To", "property":"name", "width":100},
  ]
  const data = [
    { "name":"Name 1", "age":"Age 1", "year":"Year 1" },
    { "name":"Name 2", "age":"Age 2", "year":"Year 2" },
    { "name":"Name 3", "age":"Age 3", "year":"Year 3", }
      
  ]
  const tableJson = { 
    title: "Title",
    subtitle: "Subtitle",
    "headers": header ,
    "datas": tickets,
  
    "options": {
      "width": 300
    }
  };
  
const invoiceData = {
    addresses: {
        shipping: {
            name: 'John Doe',
            address: '2400 Fulton Street',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
            postalCode: 94118
        },
        billing: {
            name: 'John Doe',
            address: '2400 Fulton Street',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
            postalCode: 94118
        }
    },
    memo: 'As discussed',
    items: [{
            itemCode: 12341,
            description: 'Laptop Computer',
            quantity: 2,
            price: 3000,
            amount: 6000
    }, {
            itemCode: 12342,
            description: 'Printer',
            quantity: 1,
            price: 2000,
            amount: 2000
        }
    ],
    subtotal: 8000,
    paid: 0,
    invoiceNumber: 1234,
    dueDate: 'Feburary 02, 2021'
}

 /*  doc.image('bisha-bangla.png', {
    fit: [100, 100],
    align: 'center',
    valign: 'center'
  }); */

  doc.image('bisha-bangla.png',  20, 20, { width: 30})
  .fillColor('#000')
  .fontSize(20)
  .text('INVOICE', 275, 50, {align: 'right'})
  .fontSize(10)
  .text(`Invoice Number: `, {align: 'right'})
  .text(`Due: `, {align: 'right'})
  .text(`Balance Due: `, {align: 'right'})
  .moveDown()
  .table( tableJson , { 
    // A4 595.28 x 841.89 (portrait) (about width sizes)
    width: 300,
    //columnsSize: [ 200, 100, 100 ],
  }); 

// done!
doc.end();