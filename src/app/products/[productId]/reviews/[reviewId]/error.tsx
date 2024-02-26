"use client"
export default function ErrorBoundary({error, reset}:{
    error:Error;
    reset:()=>void; // Re render the page component to recover from error
}) {
    return <div>{error.message} <button onClick={reset}>Try Again</button></div>
}