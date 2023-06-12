import { createSlice } from "@reduxjs/toolkit";
import docs from './../../assets/images/docs.svg'
import kyc from './../../assets/images/kyc.svg'
import sign from './../../assets/images/sign.svg'
import collect from './../../assets/images/collect.svg'


const products = [
  {
    "id": "p1",
    "title": 'Leverage deep tech & digitalize KYC with DigiKYC',
    "icon": kyc,
    "status": "Available now",
    "learnMore": "https://www.digio.in/#/digi-kyc",
    "features": [
      { id: "f1", title: "1ID OCR & Face match, Video KYC V-CIP, Digilocker, Aadhaar" },
      { id: "f2", title: "1Drag & Drop to create eKYC workflows as per SEBI/RBI/IRDA" },
      { id: "f3", title: "1Business verification with 360 view" },
      { id: "f4", title: "1Cert-in Certified" },
    ]
  },
  {
    "id": "p2",
    "title": 'Move from wet ink to digital signatures with DigiSign',
    "icon": sign,
    "status": "Market Leader",
    "learnMore": "https://www.digio.in/#/digi-sign",
    "features": [
      { id: "f1", title: "Digital signing with workflows & Automation" },
      { id: "f2", title: "Aadhaar eSign, Electronic/Virtual Sign, DSC, Bulk signing" },
      { id: "f3", title: "Digital Seal, Maker Checker, Bulk requests" },
    ]
  },
  {
    "id": "p3",
    "title": 'Simplify recurring payment collections with DigiCollect',
    "icon": collect,
    "status": "Market Leader",
    "learnMore": "https://www.digio.in/#/digi-collect",
    "features": [
      { id: "f1", title: "Digitalize, automate NACH mandate registration & Debits" },
      { id: "f2", title: "End-to-end Solution for Recurring Payments" },
      { id: "f3", title: "UPI 2.0 Mandate" },
    ]
  },
  {
    "id": "p4",
    "title": 'Automate Documentation & e-Stamping with DigiDocs',
    "icon": docs,
    "status": "Available now",
    "learnMore": "https://www.digio.in/#/digi-docs",
    "features": [
      { id: "f1", title: "Automate and Define Business Workflows" },
      { id: "f2", title: "Smart Forms, Templates & Online PDF editor" },
      { id: "f3", title: "Pan India eStamp Coverage" },
    ]
  }

]

const crouselSlice = createSlice({
  name: 'crousel-slice',
  initialState: {
    activeIndex: 0,
    products
  },
  reducers: {
    move: (state) => {
      if (state.activeIndex < state.products.length - 1) {
        state.activeIndex++;
      } else {
        state.activeIndex = 0
      }
    },
    to: (state, action) => {
      state.activeIndex = action.payload.idx
    }
  }
})

export const actions = crouselSlice.actions
export const slice = crouselSlice