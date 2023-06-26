// Server Component if not define "use client"
async function getData(id: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("RSC-Test: " + id);
            resolve(id);
        }, 2000);
    });
}

export default async function RSCProduct({id}: {id: number}) {
    const random = await getData(id);
    return (<>
        <img src={`/${random}.png`} alt={`Image ${random}`} width={'600'} height={'600'} />
        <p className="legend my-2">Image {String(random)}</p>
    </>)
}