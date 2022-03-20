import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Container, InputYOB, SubmitBtn, FamilyTree, Row } from './style'
import Node from '../../components/node/Node';

const dataSample = [
  {
      'name': 'ABE SIMPSON',
      'id': 0,
      'yearOfBirth': 1960,
      'sex': 'male',
      'wife': 1,
      'husband': null,
      'father': null,
      'mother': null,
      'children': [4, 5],
  },
  {
      'name': 'MONA SIMPSON',
      'id': 1,
      'yearOfBirth': 1962,
      'sex': 'female',
      'wife': null,
      'husband': 0,
      'father': null,
      'mother': null,
      'children': [4, 5],
  },
  {
      'name': 'CLANCY BOUVIER',
      'id': 2,
      'yearOfBirth': 1964,
      'sex': 'male',
      'wife': 3,
      'husband': null,
      'father': null,
      'mother': null,
      'children': [6, 7, 8],
  },
  {
      'name': 'JACHQUELINE BOUVIER',
      'id': 3,
      'yearOfBirth': 1968,
      'sex': 'female',
      'wife': null,
      'husband': 2,
      'father': null,
      'mother': null,
      'children': [6, 7, 8],
  },
  {
      'name': 'HERB SIMPSON',
      'id': 4,
      'yearOfBirth': 1985,
      'sex': 'male',
      'wife': null,
      'husband': null,
      'father': 0,
      'mother': 1,
      'children': [],
  },
  {
      'name': 'HOMER SIMPSON',
      'id': 5,
      'yearOfBirth': 1990,
      'sex': 'male',
      'wife': 6,
      'husband': null,
      'father': 0,
      'mother': 1,
      'children': [9, 10, 11],
  },
  {
      'name': 'MARGE BOUVIER',
      'id': 6,
      'yearOfBirth': 1995,
      'sex': 'female',
      'wife': null,
      'husband': 5,
      'father': 2,
      'mother': 3,
      'children': [9, 10, 11],
  },
  {
      'name': 'PATTY BOUVIER',
      'id': 7,
      'yearOfBirth': 1997,
      'sex': 'female',
      'wife': null,
      'husband': null,
      'father': 2,
      'mother': 3,
      'children': [],
  },
  {
      'name': 'SELMA BOUVIER',
      'id': 8,
      'yearOfBirth': 2000,
      'sex': 'female',
      'wife': null,
      'husband': null,
      'father': 2,
      'mother': 3,
      'children': [12],
  },
  {
      'name': 'BART SIMPSON',
      'id': 9,
      'yearOfBirth': 2017,
      'sex': 'male',
      'wife': null,
      'husband': null,
      'father': 5,
      'mother': 6,
      'children': [],
  },
  {
      'name': 'LISA SIMPSON',
      'id': 10,
      'yearOfBirth': 2019,
      'sex': 'female',
      'wife': null,
      'husband': null,
      'father': 5,
      'mother': 6,
      'children': [],
  },
  {
      'name': 'MAGGIE SIMPSON',
      'id': 11,
      'yearOfBirth': 2021,
      'sex': 'female',
      'wife': null,
      'husband': null,
      'father': 5,
      'mother': 6,
      'children': [],
  },
  {
      'name': 'LING BOUVIER',
      'id': 12,
      'yearOfBirth': 2022,
      'sex': 'male',
      'wife': null,
      'husband': null,
      'father': null,
      'mother': 8,
      'children': [],
  },
]

const PageType3 = () => {
  const [data, setData] = useState(dataSample)
  const [parseGeneration, setParseGeneration] = useState()

  const [yob, setYob] = useState()

  // useEffect(() => {
  //   fetch("http://localhost:5000")
  //     .then(res => res.json())
  //     .then((result) => {
  //       // console.log("result: ", result)
  //       // setData(JSON.stringify(dataSample, undefined, 4))
  //     })
  // }, [])
  useEffect(() => {
    console.log("data 1", data);

    const endpoint = '/check';
    const method = 'post';
    const URL = `http://localhost:5000${endpoint}`;
    let d = axios({
      method,
      url: URL, 
      data: {
        'arrData': data
      }
    }).catch(err => {
      console.log(err);
    }).then(res => {
      console.log(res.data)    
      setParseGeneration(res.data.parseGenerationData) 
      // setListUser(res.data.data) 
    });
  }, [data])

  const handleClick= () => {
    console.log(yob)
    const endpoint = '/yob';
    const method = 'post';
    const URL = `http://localhost:5000${endpoint}`;
    let d = axios({
      method,
      url: URL, 
      data: {
        'yob': yob
      }
    }).catch(err => {
      console.log(err);
    }).then(res => {
      console.log(res.data)    
      setParseGeneration(res.data.data) 
      // setListUser(res.data.data) 
    });
  }
  return (
    <div>
      <p>same one page showing only the Family Tree for user that has birthed in the year YYYY</p>
      <Container>
        <InputYOB>
        <span><trong>Input YOB:</trong> </span>
        <input value={yob} type="number" onChange={(e) => setYob(e.target.value)}/>
        <SubmitBtn onClick={handleClick}>Submit</SubmitBtn>
        </InputYOB>
        {parseGeneration ? <FamilyTree>
          {parseGeneration.map((item, index) => <Row key={index}>Gen {index+1}:
            {parseGeneration[index].map((item1, index1) => <Node data={item1}></Node>)}
          </Row>)}
        </FamilyTree> : <></>}
      </Container>
    </div>
  )
}

export default PageType3