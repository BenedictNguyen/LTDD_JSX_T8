import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';

const App = () => {
  const [user, setUser] = useState({
    name: "Tran Thi B",
    email: "b.tran@gmail.com",
    phone: "0123456789"
  });

  // URL API bạn muốn gửi dữ liệu tới
  const API_URL = 'https://66f4d07977b5e889709a8de9.mockapi.io/Banhang';  // Thay thế bằng API thật của bạn

  // Hàm gửi dữ liệu user tới API bằng phương thức POST
  const pushUserData = () => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user), // Chuyển đối tượng user thành chuỗi JSON
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Lỗi khi gửi dữ liệu: ' + response.statusText);
        }
      })
      .then(data => {
        console.log('Dữ liệu đã được gửi thành công!', data);
        Alert.alert('Thành công', 'Dữ liệu đã được gửi lên API thành công!');
      })
      .catch(error => {
        console.error('Lỗi kết nối:', error);
        Alert.alert('Lỗi', 'Có lỗi khi kết nối với API');
      });
  };

  // Tự động gửi dữ liệu khi component được mount
  useEffect(() => {
    pushUserData();
  }, []);

  return (
    <View>
      <Button title="Gửi Dữ Liệu Lên API" onPress={pushUserData} />
    </View>
  );
};

export default App;
