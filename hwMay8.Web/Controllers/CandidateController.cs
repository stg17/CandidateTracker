using hwMay8.Data;
using hwMay8.Web.NewFolder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace hwMay8.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet("getcandidates")]
        public List<Candidate> GetCandidates(Status status)
        {
            Console.WriteLine(status);
            var repo = new CandidateRepository(_connectionString);
            return repo.GetAll(status);
        }

        [HttpPost("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            candidate.Status = Status.Pending;
            var repo = new CandidateRepository(_connectionString);
            repo.AddCandidate(candidate);
        }

        [HttpGet("getcandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidate(id);
        }

        [HttpPost("changecandidate")]
        public void ChangeCandidate(StatusChangeViewModel vm)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.ChangeCandidate(vm.Status, vm.Id);
        }

        [HttpGet("getcounts")]
        public CountViewModel GetCounts()
        {
            var repo = new CandidateRepository(_connectionString);
            var vm = new CountViewModel();
            vm.PendingCount = repo.GetCount(Status.Pending);
            vm.ConfirmedCount = repo.GetCount(Status.Confirmed);
            vm.DeclinedCount = repo.GetCount(Status.Declined);
            return vm;
        }
    }
}
