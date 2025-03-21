export default async function (data) {
    try{
        const response =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/${data}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        });

        return response.json();
    } catch (e){
        console.error('Ошибка получения данных акции:', e);
    }
}