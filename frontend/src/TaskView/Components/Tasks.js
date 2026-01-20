import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTask, getTask } from '../../RequestOptions/task-requests';

/** 
 * TASK DIALOG COMPONENT  
 * **/
const Tasks = ({taskItems, setTaskItems}) => {
  let taskID = 0;
  let accountID = 1;
  let tempTask={};
  // for task dialog pop-up
  const [open, setOpen] = React.useState(false);

  // task items 
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [deadline, setDeadline] = React.useState(dayjs('2022-10-31').format('YYYY-MM-DD').toString());
  //const [accountID, setAccountID] = React.useState(0);
  const [completed, setCompleted] = React.useState(0);
  // task object 
  const [task, setTask] = React.useState({
    account_id: 1,
    task_id: 0,
    task_name: "",
    category: "",
    priority: "",
    deadline: dayjs('2022-10-31').format('YYYY-MM-DD').toString(),
    completed: 0
  });

  // task dialog box handling
  const handleClickOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setOpen(false);
  }

  React.useEffect(() => {
    console.log("taskItems: ", taskItems)
  }, [taskItems]);

  //after adding the task (from dialog box), this function gets called
  const handleClose = async (event) => {
    event.preventDefault();
    setOpen(false);
    try {
        // 1. CREATE the data on the backend (with a fetch)
    
      accountID = JSON.parse(localStorage.getItem("account_id")) || false; //assuming id 
      console.log("accountID from handleClose", accountID);
      
      const result = await createTask({
        "account_id": accountID,
        "task_name" : name,
        "category": category,
        "priority": priority,
        "deadline": deadline,
        "completed": completed
      })
      if (result[0]) {
        taskID = result[0].id;
      }
      
      setTask({
        account_id: accountID,
        task_id: taskID,
        task_name: name,
        category: category,
        priority: priority,
        deadline: deadline,
        completed: completed
      })
     
      tempTask = await getTask(accountID);
      console.log("convert to boolean: ", Boolean(tempTask.completed));
      tempTask.completed = Boolean(tempTask.completed); 
     
      
      setTaskItems(tempTask[0].get); 
      const tasksArr = [...taskItems];

      
      sessionStorage.setItem("taskObject", JSON.stringify(tasksArr)); //setting to session storage


    /*let tempTask = { 
      account_id: accountID,
      task_id: taskID,
      task_name: name,
      category: category,
      priority: priority,
      deadline: deadline,
      completed: completed
    }*/
    } catch (e) {
      console.log("error", e);
    }
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            type="task"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event) => setName(event.target.value)
            }
          />
           <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel>Tags</InputLabel>
              <Select
                autoFocus
                label="category"
                inputProps={{
                  name: 'category',
                }}
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                >
              
                <MenuItem value="Work">Work</MenuItem>
                <MenuItem value= "Personal">Personal</MenuItem>
                <MenuItem value= "Health">Health</MenuItem>
                <MenuItem value= "Errands">Errands</MenuItem>
                <MenuItem value= "Leisure">Leisure</MenuItem>
                <MenuItem value= "Miscellaneous">Miscellaneous</MenuItem>
              </Select>
            </FormControl>
           
          </Box>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel>Priority</InputLabel>
              <Select
                autoFocus
                label="priority"
                inputProps={{
                  name: 'priority',
                }}
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              
              </Select>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={deadline.toString()}
                onChange={(date) => setDeadline(date.format('YYYY-MM-DD').toString())}
                renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
              
           
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Tasks;



