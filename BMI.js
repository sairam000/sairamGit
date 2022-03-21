
var text = '[{ "gender":"male", "heightCm":"175", "weightKg":"30"},{ "gender":"male", "heightCm":"175", "weightKg":"90"}]';
var obj = JSON.parse(text);
count=0;
for(let x in obj)
{
    height=obj[x].heightCm;
    weight=obj[x].weightKg;
    height /= 100;
	height *= height;
    BMI_Formula=weight/height;
    if(BMI_Formula<= 18.4)
    {
        obj[x].BMI_Category='Underweight'
        obj[x].Health_Risk='Malnutrition risk'
        
    }
    else if(BMI_Formula >= 18.5 && BMI_Formula <= 24.9)
    {
        obj[x].BMI_Category='Normal Wight'
        obj[x].Health_Risk='low risk'
    }
    else if(BMI_Formula >= 25 && BMI_Formula <= 29.9)
    {
        obj[x].BMI_Category='Overweight'
        obj[x].Health_Risk='Enhanced risk'
    }
    else if(BMI_Formula >= 30 && BMI_Formula <= 34.9)
    {
        obj[x].BMI_Category='Moderately obese'
        obj[x].Health_Risk='Medium risk'
    }
    else if(BMI_Formula >= 35 && BMI_Formula <= 39.9)
    {
        obj[x].BMI_Category='Severel obese'
        obj[x].Health_Risk='High'
    }
    else if(BMI_Formula >= 40)
    {
        obj[x].BMI_Category='Very severel obese'
        obj[x].Health_Risk='Very high risk'
    }
    if(obj[x].BMI_Category=="Overweight")
    {
        count++;
    }
}
console.log(count);
console.log(obj);

