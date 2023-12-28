export const getStudents = async () => {
    try {
  const res =await fetch('http://localhost:4000/stude     nts')
        if (!res.ok) {
            throw new Error((await res.text()) || "Nimadir xato");
        }
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
};