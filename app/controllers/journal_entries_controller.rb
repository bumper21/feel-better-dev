class JournalEntriesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :find_journal_entry, only: [:destroy, :show, :edit, :update]
  before_action :authorize_user!, only: [:new, :create, :edit, :update, :destroy]

  def new
    @journal_entry = JournalEntry.new
  end

  def create
    @journal_entry = JournalEntry.new journal_entry_params
    @journal_entry.user = current_user

    if @journal_entry.save
      
    end
  end

  def index
    @journal_entries = JournalEntry.where(user: current_user).order(created_at: :desc)
    if current_user
      render :index
    else
      flash[:danger] = "Please Sign In"
      redirect_to root_path
    end

  end

  def edit
  end

  def update
  end

  def destroy
    if @journal_entry.destroy
      flash[:success] = "Journal Erased"
    end
    redirect_to journal_entries_path
  end

  private

  def journal_entry_params
    params.require(:journal_entry).permit(:feeling, :body)
  end

  def find_journal_entry
    @journal_entry = JournalEntry.find params[:id]
  end

  def authorize_user!
    unless can? :crud, @journal_entry
      flash[:danger] = "Unauthorized to erase"
      redirect_to root_path
    end
  end
  
end
