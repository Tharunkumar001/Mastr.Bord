import { FormControlLabel, MenuItem, Radio, TextField } from "@material-ui/core"

const FacultyAdmin = () => {
    return(
        <div>
            <form style={{display:"flex", flexDirection:"column"}}>
                <TextField id="Email" label="Email" variant="filled" helperText="Eg: abc@gmail.com"
                    
                    autoFocus={true}
                />

                <TextField
                    id="outlined-select-currency"
                    variant="filled"
                    select
                    label="Section"
                    helperText="Please select valid details"
                >
                    {['2A','2B','3A','3B','4A','4B'].map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>

                <FormControlLabel value="verified" control={<Radio />} label="Verified" />

            </form>        </div>
    )
}

export default FacultyAdmin
