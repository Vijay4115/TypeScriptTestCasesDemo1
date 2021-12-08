import React from "react";
import {create,act} from "react-test-renderer";
import First from "./First";
import axios from "axios";

const tree = create(<First navigation={undefined} />)
// expect(tree).toMatchSnapshot();
test("Minimum Component Check",()=>{
    let txtInput = tree.root.findByProps({testID:'txtinput_ID'}).props;
    let btnSubmit = tree.root.findByProps({testID:'btn_submit'}).props;
    let btnRandom = tree.root.findByProps({testID:'btn_random'}).props;
    
    expect(txtInput).toBeDefined();
    expect(btnSubmit).toBeDefined();
    expect(btnRandom).toBeDefined();
    
})

test("Input PlacveHolder Check",()=>{

    let txtinput = tree.root.findByProps({testID:'txtinput_ID'}).props;
    //console.log(txtinput);
    
    expect(txtinput.placeholder).toBe("Enter Asteroid ID");

})
test("Input Check",()=>{

    const txtInput = tree.root.findByProps({testID:'txtinput_ID'}).props;
    const btnSubmit = tree.root.findByProps({testID:'btn_submit'}).props;
    
    txtInput.value=""
    // txtInput.value="220"

    if(txtInput.value ==''){
        expect(btnSubmit.disabled).toBeTruthy();
    }
     if (txtInput.value !=''){
        expect(btnSubmit.disabled).toBeFalsy();
    }
})


// async function checkData() {
//     const res = await axios.get('https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=T2ZXPNtpnIND1j3eEW33UY8FFUqZF0vdGJcbRL3r');
//     return res.data;

// }

// test("Check Api Valid or Not => ",async()=>{
    
//     let dta = await checkData();
//     expect(dta).not.toBeNull();
// })




describe('#Get Data from Api', () => {
    it('Check API and data of 2000433 ID', async () => {
      const data = await axios.get('https://api.nasa.gov/neo/rest/v1/neo/2000433?api_key=T2ZXPNtpnIND1j3eEW33UY8FFUqZF0vdGJcbRL3r');
        expect(data).not.toBeNull();
        expect(data.data.name).toEqual('433 Eros (A898 PA)');
    })
})
  
describe("Get All Data From Random Calling",()=>{

    it("Test That Calling Random Api Or Not",async()=>{
         const data =await axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=T2ZXPNtpnIND1j3eEW33UY8FFUqZF0vdGJcbRL3r');
        expect(data).not.toBeNull();
    })
})


