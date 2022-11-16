import { FormControlLabel, MenuItem, Radio, TextField } from "@material-ui/core"

const CoAdmin = () => {
    return(
        <div>
            <form style={{display:"flex", flexDirection:"column"}}>
                <TextField id="Email" label="Email" variant="filled" helperText="Eg: abc@gmail.com"
                    
                    autoFocus={true}
                />

                <FormControlLabel value="verified" control={<Radio />} label="Verified" />

            </form>
        </div>
    )
}

export default CoAdmin
