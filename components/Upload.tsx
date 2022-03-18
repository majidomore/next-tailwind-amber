import React from 'react';

type Props = {
    name?: string;
};

const Upload = ({ name }: Props) => { 
    return (
        <div className='flex flex-col mt-5'>
            <input type="url" className='bg-aqua_haze w-96 h-10' />
        </div>
    );
};

export default Upload;