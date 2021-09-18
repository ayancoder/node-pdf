//Required package
var pdf = require("pdf-creator-node")
var fs = require('fs')

// Read HTML Template
var html = fs.readFileSync('template.html', 'utf8')

var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
};

/* var tickets = [
  {
      "state": "NEW",
      "_id": "613f6a4a9ff1747ec05d9927",
      "subject": "ticket with office",
      "source": "Panchayat",
      "creator": {
          "_id": "613f474c9ff1747ec05d9905",
          "name": "ranga jana"
      },
      "createDate": "2021-09-13T15:12:10.492Z",
      "docketId": "PUR-II/9-13-2021/3"
  },
  {
      "state": "NEW",
      "_id": "6140c2b9f68fa2e3265c3c29",
      "subject": "test ticket",
      "source": "Panchayat",
      "creator": {
          "_id": "613f474c9ff1747ec05d9905",
          "name": "ranga jana"
      },
      "createDate": "2021-09-14T15:41:45.190Z",
      "docketId": "PUR-II/9-14-2021/7"
  },
  {
      "state": "NEW",
      "_id": "6140c1a3efb0739312d828fd",
      "subject": "bad raod",
      "source": "State",
      "creator": {
          "_id": "613f474c9ff1747ec05d9905",
          "name": "ranga jana"
      },
      "filePath": "/uploads/2021-09-14T15:37:05.899Zimage.jpg",
      "createDate": "2021-09-14T15:37:07.099Z",
      "docketId": "PUR-II/9-14-2021/6"
  },
  {
      "state": "NEW",
      "_id": "6140c088efb0739312d828ee",
      "subject": "rang ticket",
      "source": "State",
      "creator": {
          "_id": "613f474c9ff1747ec05d9905",
          "name": "ranga jana"
      },
      "filePath": "/uploads/2021-09-14T15:32:08.117Zimage.jpg",
      "createDate": "2021-09-14T15:32:24.524Z",
      "docketId": "PUR-II/9-14-2021/5"
  },
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
] */

const tickets = [
  {
    _id: "613f6a139ff1747ec05d9915",
    subject: 'ticket with office',
    source: 'Panchayat',
    docketId: 'PUR-II/9-13-2021/1',
    assignedTo: { 
      //_id: 613f47369ff1747ec05d9901,
       name: 'aban adak' }
  },
  {
    _id: "613f6a429ff1747ec05d991f",
    subject: 'ticket with office',
    source: 'Panchayat',
    docketId: 'PUR-II/9-13-2021/2',
    assignedTo: { 
      //_id: 613f47369ff1747ec05d9901, 
      name: 'aban adak' }
  }
]
const office = {"address" :"Manbazar 2, Purulia, West Bengal"};

  

  var document = {
    html: html,
    data: {
      office: office,
      tickets: tickets,
    },
    path: "./output.pdf",
    type: "",
  };

  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });