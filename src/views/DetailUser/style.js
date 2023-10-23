import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topSection: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primaryColor, // Màu nền của phần 2/5
  },
  header:{
    flexDirection:"row",
    marginVertical:5,
    justifyContent:"space-between",
    alignItems:"center"
  },
  headerText:{
    flexDirection:"row",
    marginVertical:7,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  update:{
    color:"#039BFF",
  },
  row:{
    flexDirection:"row",
    marginVertical:10,
    alignItems:"center"

  },
  icon:{
    marginRight:6
  },
  label:{
  marginRight:6
  },
  text:{
    fontWeight:"bold",

  },
  logout:{
    color:"red",
  },
  bottomSection: {
    flex: 7,
    backgroundColor: '#F0F0F0', // Màu nền của phần 3/5
  },
  userImageContainer: {
    marginBottom: 5,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 20, // Để làm tròn hình ảnh thành hình tròn
    backgroundColor:"white",
    marginVertical:10
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#00FF38",
  },
  userName:{
    fontSize: 22,
    fontWeight: 'bold',
    color:"white",
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

  containerInfo:{
    flex:2,
    backgroundColor:"white",
    paddingHorizontal:15,
    paddingVertical:10,
    marginTop:15,
  },
});

export default styles;
