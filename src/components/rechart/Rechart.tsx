import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import {
  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import axios from 'axios';

const Rechart = () => {

  const [phones, setPhones] = useState([]);

  const data = [
    {
      name: "Jan",
      uv: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 210,
    },
    {
      name: "Mar",
      uv: 2400,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 1300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 1490,
      pv: 7300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 2490,
      pv: 1300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // get api using axios and it shows data into graph
  axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      const loadedPhone = data.data.data;
      const phoneData = loadedPhone.map(phone => {
        // lets modify the data;
        const parts = phone.slug.split('-');
        const price = parseInt(parts[1]);
        const singlePhone = {
          name: phone.phone_name,
          price: price

        }
        return singlePhone;
      })
      // console.log(phoneData);
      setPhones(phoneData)
    })

  

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-[#4338CA] text-xl font-bold">Overview</h1>
                <div>
                    <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Income" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Fruits</SelectLabel>
                              <SelectItem value="apple">Apple</SelectItem>
                              <SelectItem value="banana">Banana</SelectItem>
                              <SelectItem value="blueberry">Blueberry</SelectItem>
                              <SelectItem value="grapes">Grapes</SelectItem>
                              <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                    </Select>
                </div>
        </div>
        
        {/* rechart here */}

        <ResponsiveContainer width="100%" height={300}>
         
            <BarChart width={150} height={40} data={phones}>
          <Bar  dataKey="price" fill="#8884d8" />
          <XAxis dataKey='name'/>
          <YAxis dataKey="price" />
            <Tooltip />
        </BarChart>
          
        </ResponsiveContainer>
        
            
        </div>
    );
};

export default Rechart;