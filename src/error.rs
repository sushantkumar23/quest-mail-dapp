use thiserror::Error;

#[derive(Error, Debug, Copy, Clone)]
pub enum MailError {
    /// Invalid Instruction
    #[error("Invalid Instruction")]
    InvalidInstruction,
}
