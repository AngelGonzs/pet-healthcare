import React from 'react'
import AddAPet from "../Components/AddAPet.tsx"

function AddAPetPage({setPetData}) {
    return (
        <div>
            <AddAPet setPetData={setPetData}/>
        </div>
    );
};

export default AddAPetPage;