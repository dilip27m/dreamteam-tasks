# Task-03

## Chapter-12 Web scraping

### Practice Questions

#### 1st question
webbrowser it is used to open specific urls in the webbrowser

requests Downloads files and web pages from the Internet

beautifulsoup Parses HTML, the format that web pages are written in

selenium module m Launches and controls a web browser. Selenium is able to
fill in forms and simulate mouse clicks in this browser.

#### 2nd question 
it returns a response object we use .text(response.text) to acess the content as a stiring

#### 3rd question
raise_for_status() this method checks whether the sownload worked or not .

#### 4th question 
by using .status_code attribute of the Response object

#### 5th question
with open() function and write method


#### 6th question
ctrl+shift+i


#### 7th question
right click on the element and click inspect element 

#### 8th question
soup.select('#main')

#### 9th question 
soup.select('.highlight')

#### 10th question
soup.select('div  div')

#### 11th question
soup.select(button[value="favourite"])

#### 12th question
spam.getText()

#### 13th questio
linkElem=bs4.BeautifulSoup(open('filename.html'))


i didnot do the selenium module part 


## Chapter-13
### practice questions
#### 1st question
The openpyxl.load_workbook() function takes in the filename and returns
a value of the workbook data type

#### 2nd question
list of all the sheet names in the workbook

#### 3rd question
can be obtained by
passing the sheet name string to the get_sheet_by_name() workbook method

#### 4th question
using .get_active_sheet()

#### 5th question
sheet['C5'].value

#### 6th question
shett['C5']='Hello'

#### 7th question
sheet.cell(row=1,column=2)
example
#### 8th question
integer is the datatype and returns the size of the excel sheet respectively
#### 9th question
from openpyxl.cell importcolumn_index_from_string
column_index_from_string('M')
#### 10th question
from openpyxl.cell import get_column_letter
get_column_letter(14)

#### 11th question
tuple(sheet['A1':'F1'])

#### 12th question
wb.save('example.xlsx')

#### 13th question
A formula is set just like any other text value in a cell
sheet['A1'] = 200
sheet['A2'] = 300
sheet['A3'] = '=SUM(A1:A2)'

#### 14th question
you must pass True for the data_only keyword
argument to load_workbook()

wbDataOnly = openpyxl.load_workbook('writeFormula.xlsx', data_only=True)
sheet = wbDataOnly.get_active_sheet()
sheet['A3'].value

#### 15th question
sheet.row_dimensions[1].height = 100

