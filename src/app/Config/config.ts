export const AdvanceFilterConfig = {
  categories:[{
    name:'BaseLine Information',
    label:'BaseLine Information'
    },
    {
      name:'Program Details',
      label:'Program Details'
    },
    {
      name:'Fixture Details',
      label:'Fixture Details'
    }]
};


export const AllStoresTableConfig = {
  tableHeight: 100, // in %(optional)
  tableHeadingHeight: 10, // in %(optional)
  tableBodyHeight: 90, // in %(optional)
  tableWidth: 100, // in %(optional)
  cellPadding: 15, // in px(optional)
  cellMinWidth: 100, // in px(optional)
  resize: true, // (optional)
  sort: true, // (optional)
  isFiltered: false, // (optional)
  filter: null, // (optional)
  columnNames: [{
    name: 'AppleID',
    label: 'Apple ID'
  }, {
    name: 'City',
    label: 'City'
  }, {
    name: 'ContractID',
    label: 'Contract ID'
  }, {
    name: 'Country',
    label: 'Country'
  }, {
    name: 'StoreName',
    label: 'Store Name'
  }, {
    name: 'District',
    label: 'District'
  }],// (mandatory)
  availableFields: [{
    name: 'AppleID',
    label: 'Apple ID'
  }, {
    name: 'City',
    label: 'City'
  }, {
    name: 'ContractID',
    label: 'Contract ID'
  }, {
    name: 'Country',
    label: 'Country'
  }, {
    name: 'StoreName',
    label: 'Store Name'
  }, {
    name: 'District',
    label: 'District'
  }, {

  }]
};

export const BaseLineInformation = [{
    name: 'StoreName',
    label: "Store Name"
  }, {
    name: "ContractID",
    label: "Contract ID"
  }, {
    name: "Country",
    label: "Country"
  }, {
    name: "DCOTAConnection",
    label: "DCOTA Connection"
  }, {
    name: "SFOStoreID",
    label: "SFO Store ID"
  }, {
    name: "LocalizedStoreName",
    label: "Localized Store Name"
  }, {
    name: "StoreAddressLine1",
    label: "Store Address Line 1"
  }, {
    name: "StoreAddressLine2",
    label: "Store Address Line 2"
  }, {
    name: "StoreAddressLine3",
    label: "Store Address Line 3"
  }, {
    name: "AppleID",
    label: "Apple ID"
  }, {
    name: "City",
    label: "City"
  }, {
    name: "District",
    label: "District"
  }
  ];

export const ProgramDetails = {
  columnNames: [{
    name: "2D Elements",
    label: "2D Elements"
  },
  {
    name: "3D Elements",
    label: "3D Elements"
  },
  {
    name: "Ancilliary Elements",
    label: "Ancilliary Elements"
  },
  {
    name: "Apple Funded Staffing Model",
    label: "Apple Funded Staffing Model"
  },
  {
    name: "Approval Status",
    label: "Approval Status"
  },
  {
    name: "Content Distribution",
    label: "Content Distribution"
  },
  {
    name: "Funding Model",
    label: "Funding Model"
  },
  {
    name: "Location Approval",
    label: "Location Approval"
  },
  {
    name: "White(+)",
    label: "White(+)"
  }
  ]
};

export const FixtureDetails = {
  columnNames: [{
    name: "2D Elements",
    label: "2D Elements"
  }, {
    name: "3D Elements",
    label: "3D Elements"
  }, {
    name: "Ancilliary Elements",
    label: "Ancilliary Elements"
  }, {
    name: "Actual Installatio Date",
    label: "Actual Installatio Date"
  }, {
    name: "Actual Opening Date",
    label: "Actual Opening Date"
  }, {
    name: "Appointment Date",
    label: "Appointment Date"
  }, {
    name: "Demo Elements",
    label: "Demo Elements"
  }, {
    name: "Fixture Class",
    label: "Fixture Class"
  }, {
    name: "Target Installation Date",
    label: "Target Installation Date"
  }, {
    name: "Version",
    label: "Version"
  }
  ]
};

export const ProgramPipeline = {
  columnNames: [{
    name: "3D Site Survey Status",
    label: "3D Site Survey Status"
  }, {
    name: "Location Review",
    label: "Location Review"
  }, {
    name: "Site Survey Status",
    label: "Site Survey Status"
  }, {
    name: "Wave Status",
    label: "Wave Status"
  }]
};

export const twoDandthreeDElements = {
  columnNames: [{
    name: "Asset Tag",
    label: "Asset Tag"
  }, {
    name: "Asset Type",
    label: "Asset Type"
  }, {
    name: "Description",
    label: "Description"
  }, {
    name: "Language",
    label: "Language"
  }, {
    name: "Material",
    label: "Material"
  }, {
    name: "Product Code",
    label: "Product Code"
  }, {
    name: "Size",
    label: "Size"
  }]
};

export const AncilliaryElements = {
  columnNames: [{
    name: "Asset Type",
    label: "Asset Type"
  }, {
    name: "Description",
    label: "Description"
  }, {
    name: "Product Code",
    label: "Product Code"
  }]
};

export const DemoElements = {
  columnNames: [{
    name: "Asset Type",
    label: "Asset Type"
  }, {
    name: "Description",
    label: "Description"
  }, {
    name: "Product Code",
    label: "Product Code"
  }, {
    name: "LOB",
    label: "LOB"
  }, {
    name: "Quantity",
    label: "Quantity"
  }]
}