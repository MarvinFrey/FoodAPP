import React from 'preact';

function Button({ buttonName }: { buttonName: string; }) {
    return (
        <div class="border-black border hover:bg-slate-100">
            <button>{buttonName}</button>
        </div>
    );
}

export default Button;