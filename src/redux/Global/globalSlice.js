import { createSlice } from "@reduxjs/toolkit";
import { contractSave } from "./operations";

const initialState = {
  isLoading: false,
  isModalErrorOpen: false,
  isBlockThanks: false,
  // globalCustomerData: null,
  // forms: {},
  isContractOSAGO: false,
  isContractDGO: false,
  globalCustomerData: {},
  paramsFromUrl: null,
  homeAddress: { label: "", value: "" },
  error: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setGlobalCustomerData: (state, { payload }) => {
      state.globalCustomerData = { ...state.globalCustomerData, ...payload };
    },
    setIsModalErrorOpen: (state, { payload }) => {
      state.isModalErrorOpen = payload;
    },
    // setGlobalCustomerDataCustomer: (state, { payload }) => {
    //   state.globalCustomerData.customer = {
    //     ...state.globalCustomerData.customer,
    //     ...payload,
    //   };
    // },
    // setFormData: (state, { payload }) => {
    //   state.forms = { ...state.forms, ...payload };
    // },

    setParamsFromUrl: (state, { payload }) => {
      state.paramsFromUrl = { ...state.payload, ...payload };
    },
    setHomeAddress: (state, { payload }) => {
      state.homeAddress = payload;
    },
    setIsBlockThanks: (state, { payload }) => {
      state.isBlockThanks = payload;
    },
    setIsContractOSAGO: (state, { payload }) => {
      state.isContractOSAGO = payload;
    },
    setIsContractDGO: (state, { payload }) => {
      state.isContractDGO = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contractSave.fulfilled, (state, _) => {
        state.isBlockThanks = true;
        state.isLoading = false;
      })
      .addCase(contractSave.rejected, (state, { payload }) => {
        state.isBlockThanks = false;
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(contractSave.pending, (state, _) => {
        state.isBlockThanks = false;
        state.isLoading = true;
      });
  },
});

export const {
  setIsModalErrorOpen,
  setIsLoading,
  setGlobalCustomerData,
  setParamsFromUrl,
  setGlobalCustomerDataCustomer,
  setFormData,
  setHomeAddress,
  setIsContractOSAGO,
  setIsContractDGO,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

///Запрос на получение тарифов без ДГО
// curl --request POST \
//    --url https://web.eua.in.ua/eua/api/v15/contract/save  \
//    --header 'content-type: application/json' \
//    --header 'x-auth-user: {user}' \
//    --header 'x-auth-token: {token}' \
//    --data '{
//   "type": "epolicy",
//   "salePoint": {
//     "id": 694,
//     "company": {
//       "type": "broker",
//       "id": 19
//     }
//   },
//   "user": {
//     "id": 44019
//   },
//   "tariff": {
//     "type": "epolicy",
//     "id": 10935
//   },
//   "dateFrom": "2018-06-05T21:00:00.000+0000",
// "customer": {
//   "code": "1234567890",
//   "nameLast": "Тест",
//   "nameFirst": "Тест",
//   "address": "Киев",
//   "phone": "+380111111111",
//   "email": "test@test.ua"
//   "birthDate": "1987-01-01",
//   "document": {
//     "type": "PASSPORT",
//     "series": "аа",
//     "number": "12345",
//     "date": "2003-01-01",
//     "issuedBy": "Солом'янським РУ ГУ МВС України в місті Києві"
//   }
// },
// "insuranceObject": {
//   "type": "auto",
//   "category": "B1",
//   "model": {
//     "id": 5890,
//     "autoMaker": {
//       "id": 281
//     }
//   },
//   "modelText": "Mazda 2",//ok
//   "bodyNumber": "ASDF1",//ok
//   "stateNumber": "12345АА",//ok
//   "registrationPlace": {
//     "id": 1
//   },
//   "registrationType": "PERMANENT_WITHOUT_OTK",
//   "year": 2018//ok
// },
//   "state": "DRAFT"
// } \

///Запрос на получение тарифов с ДГО
// curl --request POST \
// --url https://web.eua.in.ua/ewa/api/v15/contract/save \
// --header 'content-type: application/json' \
// --header 'x-auth-user: {user}' \
// --header 'x-auth-token: {token}' \
// --data '{
// "type": "vcl",
// "salePoint": {
// "id": 29622,
// "company": {
// "type": "broker",
// "id": 2
// }
// },
// "user": {
// "id": 46433
// },
// "tariff": {
// "type": "vcl",
// "id": 26279
// },
// "date": "2020-01-09",
// "dateFrom": "2020-01-09T22:00:00.000+0000",
// "customer": {
// "code": "3159619715",
// "nameLast": "Тест",
// "nameFirst": "Тест",
// "address": "г. Киев, Украина",
// "phone": "+380999999999",
// "birthDate": "1986-07-04",
// "document": {
// "type": "PASSPORT",
// "series": "СС",
// "number": "123456",
// "date": "2011-11-11"
// }
// },
// "insuranceObject": {
// "type": "auto",
// "model": {
// "id": 4642,
// "autoMaker": {
// "id": 104
// }
// },
// "bodyNumber": "1237889SFDFKSDFJS",
// "stateNumber": "АЕ0001АА",
// "registrationPlace": {
// "id": 1
// },
// "engineVolume": 1600
// },
// "state": "DRAFT",
// "customFields": [
// {
// "code": "cat_TS",
// "value": "L"
// }
// ],
// "limit": 500000
// }'
