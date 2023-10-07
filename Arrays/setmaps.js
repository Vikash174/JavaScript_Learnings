const ids = new Set([1,2,3]);
ids.add(2);
console.log(ids);

for (const entry of ids.entries()){
    console.log(entry);
}