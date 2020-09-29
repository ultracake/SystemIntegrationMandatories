import pandas as pd
from lxml import etree
from random import randint
import requests
import json
import msgpack

# reads from a csv file
df = pd.read_csv("Main_System/people.csv")

# generates a cpr: ddMMyyy-[random-4-digits]
def generateCpr(dob):
	splitDob = dob.split("-")
	cprDob = splitDob[0] + splitDob[1] + splitDob[2][:-2]
	numGen = randint(1000, 9999)
	return str(cprDob) + str(numGen)

def generateXml(row):
	person = etree.Element("Person")
	fname = etree.SubElement(person, "FirstName")
	fname.text = row['FirstName']
	
	lname = etree.SubElement(person, "LastName")
	lname.text = row['LastName']

	cpr = etree.SubElement(person, "CprNumber")
	cpr.text = genCpr

	email = etree.SubElement(person, "Email")
	email.text = row['Email']
	return person

# write msgpack file
def generateMsgpack(row, cpr, nemId):
	person = {
		"f_name": row["FirstName"],
		"l_name": row["LastName"],
		"birth_date": row["DateOfBirth"],
		"email": row["Email"],
		"country": row["Country"],
		"phone": row["Phone"],
		"address": row["Address"],
		"cprnumber": cpr,
		"nemid": nemId
	}
	with open(str(cpr) + ".msgpack", "wb") as outfile:
		packed = msgpack.packb(json.dumps(person))
		outfile.write(packed)


# uses the data from csv to writes a xml file
url = 'http://localhost:8080/nemID'

for index, row in df.iterrows():
	genCpr = generateCpr(row['DateOfBirth'])
	person = generateXml(row)

	# send the xml
	headers = {'Content-Type': 'application/xml'}
	response = requests.post(url, data=etree.tostring(person, xml_declaration=True), headers=headers)

	nemID = json.loads(response.text)["nemID"]

	generateMsgpack(row, genCpr, nemID)