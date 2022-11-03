'''
Generate 10000(count should be changeable) records with 3 columns –

1st col named ‘1 – to be a unique 10 digit ID.
2nd col to be named ‘2’ –
25% records to have ‘mobile app’ as value
30 % to have ‘mobile web’ as value
Remaining to have ‘web’ as value.
3rd col to be names ‘3’ – used for storing customer journey
100% to have ‘home ‘as 1st touch point
60% to have ‘product’ as 2nd touch point
40% to have ‘feedback’ as 2nd touch point.
File to be saved as .csv
Write a script which can read this csv file and change the name of the col 1, 2, 3 to ‘ECID’, ‘Device ID’ and ‘page flow’ respectively
'''
import random
import pandas as pd 

#Function to generate 'n' records 
def generate_fake_data(df, n, device_ratio, page_ratio):
    
    #To generate unique 10 digit ID
    df['1'] = [random.randrange(1000000000, 9999999999, 10) for i in range(n)]
    
    #To generate values for column 2
    device_ratio *= n // 100 
    random.shuffle(device_ratio)
    df['2'] = device_ratio
    
    ##To generate values for column 2
    page_ratio *= n // 100 
    random.shuffle(page_ratio)
    df['3'] = page_ratio
    df['3'] = 'home, '+df['3']
    
    return df

#Functin to rename column names
def rename_columns(df):

    df = df.rename({'1': 'ECID', '2': 'Device ID', '3': 'page flow'}, axis=1)
    return df

#main function to call the above defined functions
if __name__ == "__main__":
    
    #Parameter for Column 2
    device_ratio = ['mobile app'] * 25 + ['mobile web'] * 30 + ['web'] * 45 
    
    #Parameter for Column 2
    page_ratio = ['product'] * 60 + ['feedback'] * 40
    
    #Number of records to be created
    n = 10000
    
    #Function call to generate data as prescribed
    df = generate_fake_data(pd.DataFrame(columns=['1', '2', '3']), n, device_ratio, page_ratio)
    
    #Function call to rename column
    df = rename_columns(df)
    
    #Saving Data as .csv file
    df.to_csv("C:\\Projects\\FakeData\\fakedata.csv",index=False, encoding='utf-8')
    
    #Checking if data have been generated correctly as required
    print("Number of records generated = ",len(df))
    print("['ECID']", " : " ,len(set(df['ECID'])))
    print("['Device ID']")
    print(df['Device ID'].value_counts())
    print("['page flow']")
    print(df['page flow'].value_counts())

