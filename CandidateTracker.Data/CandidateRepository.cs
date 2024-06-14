using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hwMay8.Data
{
    public class CandidateRepository
    {
        private string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Candidate> GetAll(Status status)
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }

        public void AddCandidate(Candidate candidate)
        {
            var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public Candidate GetCandidate(int id)
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void ChangeCandidate(Status status, int id)
        {
            var context = new CandidateDataContext(_connectionString);
            context.Candidates.FirstOrDefault(c => c.Id == id).Status = status;
            context.SaveChanges();
        }

        public int GetCount(Status status)
        {
            var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).Count();
        }
    }
}
