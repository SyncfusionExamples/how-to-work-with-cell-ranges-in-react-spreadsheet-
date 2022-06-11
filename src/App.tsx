import React from 'react';
import './App.css';
import {SheetDirective, SheetsDirective, RowsDirective, RowDirective, CellsDirective, CellDirective,  
  SpreadsheetComponent, ColumnsDirective,ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';

function App() {
    let ssObj: SpreadsheetComponent;
    const onBtnClick=()=>{
        // ssObj.wrap("G2", true); //To wrap text.
        // ssObj.merge("B2:B6", "All"); //To merge the cells
        ssObj.selectRange("D2:D6");
        ssObj.addDataValidation({type:"Decimal", operator:"GreaterThan", value1:"300"})
        ssObj.addInvalidHighlight();
    }
    const onClick=()=>{
        // ssObj.removeInvalidHighlight();
        // ssObj.removeDataValidation();
        ssObj.autoFill("A7:A11", "A2:A6", "Down", "CopyCells");
        // ssObj.clear({type:"Clear All", range: "B1:E6"})
    }
  return (
    <div className="App">
        <button className='e-btn custom' onClick={onBtnClick}>Validate Data</button>
        <button className='e-btn custom' onClick={onClick}>Auto Fill</button>
      <SpreadsheetComponent ref={((s:SpreadsheetComponent)=>ssObj=s)} allowWrap={true} allowMerge={true}>
       <SheetsDirective>
          <SheetDirective name="Price Details">
            <RowsDirective>
                    <RowDirective>
                        <CellsDirective>
                            <CellDirective value='Item Name'></CellDirective>
                            <CellDirective value='Quantity'></CellDirective>
                            <CellDirective value='Price'></CellDirective>
                            <CellDirective value='Amount'></CellDirective>
                            <CellDirective value='Stock Detail'></CellDirective>
                            <CellDirective value='Website'></CellDirective>
                        </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                        <CellsDirective>
                            <CellDirective value='Casual Shoes'></CellDirective>
                            <CellDirective value='10' rowSpan={2} colSpan={2}></CellDirective>
                            <CellDirective value='$20'></CellDirective>
                            <CellDirective value='$200'></CellDirective>
                            <CellDirective value='OUT OF STOCK'></CellDirective>
                            <CellDirective value='Amazon'></CellDirective>
                        </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                        <CellsDirective>
                            <CellDirective value='Sports Shoes'></CellDirective>
                            <CellDirective value='20'></CellDirective>
                            <CellDirective value='$30'></CellDirective>
                            <CellDirective value='$600'></CellDirective>
                            <CellDirective value='IN STOCK'></CellDirective>
                            <CellDirective value='Overstack'></CellDirective>
                        </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                        <CellsDirective>
                            <CellDirective value='Formal Shoes'></CellDirective>
                            <CellDirective value='20'></CellDirective>
                            <CellDirective value='$15'></CellDirective>
                            <CellDirective value='$300'></CellDirective>
                            <CellDirective value='IN STOCK'></CellDirective>
                            <CellDirective value='AliExpress'></CellDirective>
                        </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                        <CellsDirective>
                            <CellDirective value='Sandals & Floaters' wrap={true}></CellDirective>
                            <CellDirective value='15'></CellDirective>
                            <CellDirective value='$20'></CellDirective>
                            <CellDirective value='$300'></CellDirective>
                            <CellDirective value='OUT OF STOCK'></CellDirective>
                            <CellDirective value='AliBaba'></CellDirective>
                        </CellsDirective>
                    </RowDirective>
                    <RowDirective>
                        <CellsDirective>
                            <CellDirective value='Flip-Flops & Slippers'></CellDirective>
                            <CellDirective value='30'></CellDirective>
                            <CellDirective value='$10'></CellDirective>
                            <CellDirective value='$500'></CellDirective>
                            <CellDirective value='IN STOCK'></CellDirective>
                            <CellDirective value='Taobao'></CellDirective>
                        </CellsDirective>
                    </RowDirective>
                </RowsDirective>
                <ColumnsDirective>
                    <ColumnDirective width={110}></ColumnDirective>
                    <ColumnDirective width={115}></ColumnDirective>
                    <ColumnDirective width={110}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                    <ColumnDirective width={110}></ColumnDirective>
                    <ColumnDirective width={100}></ColumnDirective>
                </ColumnsDirective>
          </SheetDirective>
      </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default App;
