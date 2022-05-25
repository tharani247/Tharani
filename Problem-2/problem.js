const express = require('express');
const app = express();

app.get('/prefixes', (req, res) => {
    let preval=["apple","mango","banana","guava","orange"]
    let keyword= req.query.keyword;

  if(preval.includes(keyword))
  {

     size = preval.length;
 
    

    Arrays.sort(keyword);

   
    j = 0;
    while (j < Math.min(a[0].length()-1, a[1].length()-1))
    {
        if (a[0].charAt(j)==a[1].charAt(j))
            j++;
        else
            break;
    }


     ind = 0;
    res[ind++] = a[0].substring(0, j+1);

    temp_prefix = a[1].substring(0, j+1);
    for ( i = 1; i < size-1; i++)
    {
        j = 0;
        while (j < Math.min( a[i].length()-1, a[i+1].length()-1 ))
        {
            if (a[i].charAt(j) == a[i+1].charAt(j))
                j++;
            else
                break;
        }

       new_prefix = a[i].substring(0, j+1);


        if (temp_prefix.length() > new_prefix.length() )
            res[ind++] = temp_prefix;
        else
            res[ind++] = new_prefix;


        temp_prefix = a[i+1].substring(0, j+1);
    }

    j = 0;
   sec_last = a[size-2] ;

 last = a[size-1];

    while (j < Math.min( sec_last.length()-1, last.length()-1))
    {
        if (sec_last.charAt(j) == last.charAt(j))
            j++;
        else
            break;
    }

    res[ind] = last.substring(0, j+1);
    

    const sol1= [
       {
         "keyword": keyword,
         "status": "found",
         "prefix": res
       },
     ]
     res.json(sol1);
    }
else{
    const employees= [
        {
            "keyword": keyword,
            "status": "not found",
            "prefix": "not applicable"
        },

      ]
      res.json(sol2);
     
    
}
   // code to retrieve an article...
  
 });

 app.listen(3000, () => console.log('server started'));
