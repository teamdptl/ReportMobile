import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primaryColor, // Màu nền của phần 2/5
  },
  bottomSection: {
    flex: 7,
    padding: 20,
    backgroundColor: 'white', // Màu nền của phần 3/5
  },
  userImageContainer: {
    marginBottom: 10,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Để làm tròn hình ảnh thành hình tròn
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.white,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  textDetails: {
    marginBottom: 10,
  },
  buttonCustom: {
    marginTop: 190,
    color: 'red',
  }
});

export default styles;
