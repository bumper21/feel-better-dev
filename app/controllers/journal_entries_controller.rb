class JournalEntriesController < ApplicationController
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
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def journal_entry_params
    params.require(:journal_entry).permit(:feeling, :body)
  end

  def find_journal_entry
    @journal_entry = @JournalEntry.find params[:id]
  end
  
end
